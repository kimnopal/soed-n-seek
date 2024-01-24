import PostCard from "@/components/post-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <div className="mb-4">
          <Input
            placeholder="Search posts"
            variant="icon"
            icon={<LucideSearch size={20} />}
          />
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-sm font-medium">Category : </h2>
          <Badge variant={"missing"} href="/" className="text-sm">
            missing
          </Badge>
          <Badge variant={"found"} href="/" className="text-sm">
            found
          </Badge>
        </div>
      </div>
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
      <PostCard post={{ slug: "test" }} />
    </>
  );
}
