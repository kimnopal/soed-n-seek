import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header>
      <nav className="mx-auto w-full max-w-3xl p-4 gap-8 lg:max-w-4xl">
        <div className="w-full flex justify-between items-center">
          <Link href={"/"} className="text-xl font-semibold">
            SoednSeek
          </Link>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
