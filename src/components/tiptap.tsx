import {
  useEditor,
  EditorContent,
  Editor,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import TextAlign from "@tiptap/extension-text-align";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import {
  Bold as BoldIcon,
  Check,
  ChevronsDown,
  Link,
  MoreVertical,
  Palette,
} from "lucide-react";
import { TfiParagraph } from "react-icons/tfi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaParagraph } from "react-icons/fa6";
import { EditorBubbleMenu } from "./bubble-menu";
import BulletList from "@tiptap/extension-bullet-list";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import History from "@tiptap/extension-history";
import Gapcursor from "@tiptap/extension-gapcursor";
import Strike from "@tiptap/extension-strike";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "mb-2 text-zinc-50 text-base",
        },
      }),
      Text,
      Bold,
      Underline,
      Italic,
      Strike,
      BulletList,
      HardBreak,
      Heading,
      ListItem,
      OrderedList,
      TextAlign.configure({
        types: ["paragraph", "heading"],
      }),
      Gapcursor,
      History,
    ],
    content:
      "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi veniam sit voluptas aliquam repellendus vel dolores nulla inventore ipsam doloribus omnis incidunt sunt, a quae totam eos ad accusamus et voluptatibus ab, hic, asperiores minima? Accusamus ipsum natus deserunt nesciunt, dolorem distinctio voluptate aliquid at atque rem beatae sit cumque, quis delectus exercitationem earum vero facere. Quo natus maxime voluptas illo cupiditate voluptatibus nobis consequuntur recusandae, aspernatur ea! Ratione dolor ut eos amet ipsum facere perferendis voluptas sit eum vitae dolore, labore dolores repudiandae molestias accusantium placeat quam quasi vero ipsam officia obcaecati autem? Ea ducimus dolor dolorem amet qui.</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi veniam sit voluptas aliquam repellendus vel dolores nulla inventore ipsam doloribus omnis incidunt sunt, a quae totam eos ad accusamus et voluptatibus ab, hic, asperiores minima? Accusamus ipsum natus deserunt nesciunt, dolorem distinctio voluptate aliquid at atque rem beatae sit cumque, quis delectus exercitationem earum vero facere. Quo natus maxime voluptas illo cupiditate voluptatibus nobis consequuntur recusandae, aspernatur</p>",
  });
  return (
    <div className="">
      {editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} className="" />
    </div>
  );
}
