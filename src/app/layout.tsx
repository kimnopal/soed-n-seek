import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import PartialLayout from "./_layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "w-full dark:bg-zinc-950 text-slate-100 antialiased",
          inter.className
        )}
      >
        <PartialLayout>{children}</PartialLayout>
      </body>
    </html>
  );
}
