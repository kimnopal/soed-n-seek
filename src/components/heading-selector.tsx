import { Editor } from "@tiptap/core";
import { Dispatch, FC, Ref, SetStateAction } from "react";
import { EditorBubbleMenuItem } from "./bubble-menu";
import { TfiParagraph } from "react-icons/tfi";
import {
  ChevronDown,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { cn } from "@/lib/utils";

interface HeadingSelectorProps {
  editor: Editor | undefined;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  containerRef: Ref<HTMLElement>;
}

const HeadingSelector: FC<HeadingSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
  containerRef,
}) => {
  const headings: EditorBubbleMenuItem[] = [
    {
      name: "Paragraph",
      command: () => editor?.chain().focus().setParagraph().run(),
      isActive: () => editor?.isActive("paragraph"),
      icon: TfiParagraph,
    },
    {
      name: "Heading 1",
      command: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor?.isActive("heading", { level: 1 }),
      icon: Heading1Icon,
    },
    {
      name: "Heading 2",
      command: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor?.isActive("heading", { level: 2 }),
      icon: Heading2Icon,
    },
    {
      name: "Heading 3",
      command: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor?.isActive("heading", { level: 3 }),
      icon: Heading3Icon,
    },
    {
      name: "Heading 4",
      command: () => editor?.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor?.isActive("heading", { level: 4 }),
      icon: Heading4Icon,
    },
    {
      name: "Heading 5",
      command: () => editor?.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor?.isActive("heading", { level: 5 }),
      icon: Heading5Icon,
    },
    {
      name: "Heading 6",
      command: () => editor?.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor?.isActive("heading", { level: 6 }),
      icon: Heading6Icon,
    },
  ];

  const activeHeading: EditorBubbleMenuItem =
    headings.filter((heading) => heading.isActive())?.pop() ?? headings[0];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className="text-sm font-medium h-8 px-2 transition-colors hover:rounded-md dark:text-zinc-50 dark:hover:text-zinc-400 dark:hover:bg-zinc-800"
        asChild
      >
        <div className="flex items-center gap-1 w-fit">
          <div>
            <activeHeading.icon size={16} />
          </div>
          <ChevronDown size={16} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-2 top-full space-y-1">
        {headings.map((heading, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              heading.command();
              setIsOpen(false);
            }}
            className={cn(
              "flex gap-3 w-fit relative cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none hover:bg-zinc-100 text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-zinc-50 dark:hover:bg-zinc-800",
              {
                "bg-zinc-100 dark:bg-zinc-800": heading.isActive(),
              }
            )}
          >
            <heading.icon size={16} />
            {heading.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default HeadingSelector;
