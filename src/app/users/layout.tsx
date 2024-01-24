import Link from "next/link";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="grid grid-cols-5">
        <nav className="col-span-1 min-h-screen border-r border-zinc-800 flex flex-col items-end gap-5 px-10 py-5">
          <Link href={"/users/test/profile/"}>Profile</Link>
          <Link href={"/users/test/posts"}>Post</Link>
        </nav>
        <div className="col-span-4 pl-10">{children}</div>
      </div>
    </>
  );
};

export default UserLayout;
