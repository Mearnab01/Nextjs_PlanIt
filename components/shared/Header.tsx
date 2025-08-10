import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link className="w-36 flex flex-row items-center gap-2" href={"/"}>
          <Image
            src="/assets/images/logo_2.jpg"
            alt="logo"
            width={50}
            height={20}
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-3xl font-bold text-purple-700">PlanIt</h1>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="rounded-full bg-primary-500 hover:bg-primary-600 transition-colors duration-200"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Header;
