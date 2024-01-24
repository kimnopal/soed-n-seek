"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LucideEdit, LucideMoreVertical, LucideTrash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";

interface PostCardProps {
  post: any;
}

const PostCard = ({ post }: PostCardProps) => {
  const pathname = usePathname();

  return (
    <>
      <Card>
        <CardHeader className="flex-row justify-between space-y-0">
          <div className="flex flex-col space-y-1.5">
            <Link href={"/posts/" + post.slug} className="w-fit">
              <CardTitle>Dicari barang hilang dari ingatan</CardTitle>
            </Link>
            <CardDescription>
              Posted by{" "}
              <Link
                href={"/"}
                className="font-semibold tracking-wide text-zinc-400"
              >
                @fulan
              </Link>
            </CardDescription>
          </div>

          {pathname != "/" && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <LucideMoreVertical className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Action</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={"/users/test/profile"}>
                    <DropdownMenuItem className="cursor-pointer">
                      <LucideEdit className="mr-2" size={16} />
                      <span>Edit</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/users/test/posts"} className="w-full">
                    <DropdownMenuItem className="cursor-pointer">
                      <LucideTrash2 className="mr-2" size={16} />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </CardHeader>
        <CardFooter>
          <div className="w-full flex justify-between items-end">
            <Badge variant={"missing"}>missing</Badge>

            <p className="text-sm">20 min ago</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
