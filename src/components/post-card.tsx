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
          <Link href={"/posts"} className="w-fit">
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
