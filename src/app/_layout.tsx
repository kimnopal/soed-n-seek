"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

const disableNavbarAndFooter = ["/auth/login", "/auth/register"];

const PartialLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {!disableNavbarAndFooter.includes(pathname) && <Navbar />}

      <main className="mx-auto w-full max-w-3xl min-h-screen flex flex-col pt-10 py-20 px-4 gap-4 lg:max-w-4xl">
        {children}
      </main>

      {!disableNavbarAndFooter.includes(pathname) && <Footer />}
    </>
  );
};

export default PartialLayout;
