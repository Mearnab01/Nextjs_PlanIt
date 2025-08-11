import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent, clerkClient } from "@clerk/nextjs/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const client = await clerkClient();
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET to your environment");
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing svix headers");
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  console.log("Raw payload:", payload);

  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Verified event:", evt.type);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;
    console.log(
      "Creating user in Mongo:",
      id,
      email_addresses?.[0]?.email_address
    );

    const newUser = await createUser({
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name!,
      lastName: last_name!,
      photo: image_url,
    });

    if (newUser) {
      client.users.updateUserMetadata(id, {
        publicMetadata: { userId: newUser._id },
      });
    }

    return NextResponse.json({ message: "User created", user: newUser });
  }

  if (eventType === "user.updated") {
    const { id, image_url, first_name, last_name, username } = evt.data;
    console.log("Updating user:", id);

    const updatedUser = await updateUser(id, {
      firstName: first_name!,
      lastName: last_name!,
      username: username!,
      photo: image_url,
    });

    return NextResponse.json({ message: "User updated", user: updatedUser });
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    console.log("Deleting user:", id);

    const deletedUser = await deleteUser(id!);
    return NextResponse.json({ message: "User deleted", user: deletedUser });
  }

  return new Response("Event ignored", { status: 200 });
}
