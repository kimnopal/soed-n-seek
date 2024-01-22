import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Post = () => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Dicari barang hilang dari ingatan
          </h2>

          <div className="text-zinc-400 flex gap-2">
            <Badge variant={"missing"}>hilang</Badge>
            <span>&#8226;</span>
            <h4>
              Posted by <Link href={"/"}>@fulan</Link>
            </h4>
            <span>&#8226;</span>
            <p>12/12/2012</p>
          </div>
        </div>

        <Separator />

        <div className="w-full h-96">
          <img
            src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <Separator />

        <div>
          <h5 className="text-xl font-semibold mb-2">Chronology</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vel iure maxime asperiores nulla esse atque nihil illo?
            Non ullam aliquam laudantium corrupti, provident, ex iusto eveniet
            illum voluptas soluta aspernatur distinctio. A eos quod animi illo
            laborum magnam veniam totam recusandae aperiam inventore vitae nulla
            eligendi asperiores eius temporibus quia, blanditiis voluptas,
            cupiditate quidem at! Asperiores ea autem nam pariatur consequatur
            earum, similique quasi ex, tempora consectetur, fugiat architecto
            harum labore facilis saepe recusandae. Quisquam inventore deleniti
            eligendi aspernatur dolorem omnis est ex ratione nam laboriosam
            voluptatibus eaque doloremque, quam vel harum at repudiandae
            deserunt sapiente placeat nostrum ducimus.
          </p>
        </div>

        <Separator />

        <div>
          <h5 className="text-xl font-semibold mb-2">Contacts</h5>
          <div className="flex gap-3">
            <Link
              href={"/"}
              className="w-fit flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-800"
            >
              <FaInstagram className="text-xl" />
              <span>@fulan</span>
            </Link>
            <Link
              href={"/"}
              className="w-fit flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-800"
            >
              <FaTwitter className="text-xl" />
              <span>@fulan</span>
            </Link>
            <Link
              href={"/"}
              className="w-fit flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-800"
            >
              <FaWhatsapp className="text-xl" />
              <span>1234567890</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
