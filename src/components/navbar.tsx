import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header>
      <nav className="mx-auto w-full max-w-3xl p-4 gap-8 lg:max-w-4xl">
        <div className="w-full flex justify-between items-center">
          <Link href={"/"} className="text-xl text-zinc-50 font-semibold">
            SoednSeek
          </Link>
          <div>
            <Link
              href={"/auth/login"}
              className="
              inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors

              h-10 px-4 py-2 
              
              bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
