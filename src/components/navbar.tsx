import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import {
  FaBook,
  FaNewspaper,
  FaRegNewspaper,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { LucideLogOut, LucideNewspaper, LucideUser } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header>
      <nav className="mx-auto w-full max-w-3xl p-4 gap-8 lg:max-w-4xl">
        <div className="w-full flex justify-between items-center">
          <Link href={"/"} className="text-xl text-zinc-50 font-semibold">
            SoednSeek
          </Link>
          <div>
            {!isLoggedIn ? (
              <Link
                href={"/auth/login"}
                className="
              inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors

              h-10 px-4 py-2 
              
              bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
              >
                Sign In
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="block border dark:border-zinc-800 p-1 rounded-full cursor-pointer">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Hi, Naufal</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={"/profile"}>
                    <DropdownMenuItem className="cursor-pointer">
                      <LucideUser className="mr-2" size={16} />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/posts"} className="w-full">
                    <DropdownMenuItem className="cursor-pointer">
                      <LucideNewspaper className="mr-2" size={16} />
                      <span>Posts</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LucideLogOut className="mr-2" size={16} />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
