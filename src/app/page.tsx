import PostCard from "@/components/post-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Input
          placeholder="Search posts"
          variant="icon"
          icon={<LucideSearch size={20} />}
        />
      </div>
      <div className="flex gap-2">
        <Badge variant={"missing"}>missing</Badge>
        <Badge>found</Badge>
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
