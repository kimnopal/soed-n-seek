import PostCard from "@/components/post-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PostCard post={{ slug: "test" }} />
    </>
  );
}
