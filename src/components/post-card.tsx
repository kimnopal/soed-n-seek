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

const PostCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Link href={"/"} className="w-fit">
            <CardTitle>Dicari barang hilang dari ingatan</CardTitle>
          </Link>
          <CardDescription>
            <Badge variant={"destructive"} className="mt-1">
              hilang
            </Badge>
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
        <CardFooter>
          <div className="w-full flex justify-between items-end">
            <p className="text-sm">
              Posted by{" "}
              <Link href={"/"} className="font-semibold tracking-wide">
                @fulan
              </Link>
            </p>

            <p className="text-sm">20 min ago</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
