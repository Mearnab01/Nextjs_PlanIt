import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const instrumentSans = Instrument_Sans({
  variable: "--font-instruement-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PlanIt",
  description:
    "PlanIt | Effortless event management and scheduling made simple.",
  icons: {
    icon: "/assets/images/logo_2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${instrumentSans.variable} antialiased`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
