// import ListItem from "@tiptap/extension-list-item";
// import { EditorProvider, useCurrentEditor } from "@tiptap/react";
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

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  //   const { editor } = useCurrentEditor();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2 whitespace-nowrap flex-wrap">
      <ToggleGroup type="multiple" className="p-1">
        <ToggleGroupItem value="fw">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              {/* <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="w-auto justify-between"
                  > */}
              <div className="flex justify-between items-center">
                {value ? (
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                ) : (
                  <TfiParagraph size={16} />
                )}
                <ChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </div>
              {/* </Button> */}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Command>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="B"
          // onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem value="I"></ToggleGroupItem>
        <ToggleGroupItem value="U"></ToggleGroupItem>
        <ToggleGroupItem value="S"></ToggleGroupItem>
        {/* <ToggleGroupItem value="L">
              <Link size={16} />
            </ToggleGroupItem> */}
        <ToggleGroupItem value="P"></ToggleGroupItem>
      </ToggleGroup>

      <Button
        onClick={() => editor.chain().focus().run()}
        disabled={!editor.can().chain().focus().run()}
        className={editor.isActive("bold") ? "is-active " : ""}
        variant={"outline"}
      >
        B
      </Button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        type="button"
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().run()}
        disabled={!editor.can().chain().focus().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().run()}
        disabled={!editor.can().chain().focus().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().run()}
        disabled={!editor.can().chain().focus().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().run()}
        disabled={!editor.can().chain().focus().run()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button>
    </div>
  );
};

const extensions = [
  //   Color.configure({ types: [TextStyle.name, ListItem.name] }),
  //   TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

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
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
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
    // <EditorProvider
    //   children
    //   slotBefore={<MenuBar />}
    //   extensions={extensions}
    //   content={content}
    // ></EditorProvider>

    <div className="">
      {/* <MenuBar editor={editor} /> */}
      {editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} className="" />
    </div>
  );
}
