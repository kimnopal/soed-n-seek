import { Editor } from "@tiptap/core";
import { EditorBubbleMenuItem } from "./bubble-menu";
import { Dispatch, FC, Ref, SetStateAction } from "react";
import {
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MoreVerticalIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Toggle } from "./ui/toggle";
import { cn } from "@/lib/utils";

interface AlignSelectorProps {
  editor: Editor | undefined;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  containerRef: Ref<HTMLElement>;
}

const AlignSelector: FC<AlignSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
  containerRef,
}) => {
  const aligns: EditorBubbleMenuItem[] = [
    {
      name: "Left",
      command: () => editor?.chain().focus().setTextAlign("left").run(),
      isActive: () => editor?.isActive({ textAlign: "left" }),
      icon: AlignLeftIcon,
    },
    {
      name: "Center",
      command: () => editor?.chain().focus().setTextAlign("center").run(),
      isActive: () => editor?.isActive({ textAlign: "center" }),
      icon: AlignJustifyIcon,
    },
    {
      name: "Right",
      command: () => editor?.chain().focus().setTextAlign("right").run(),
      isActive: () => editor?.isActive({ textAlign: "right" }),
      icon: AlignRightIcon,
    },
    {
      name: "Justify",
      command: () => editor?.chain().focus().setTextAlign("justify").run(),
      isActive: () => editor?.isActive({ textAlign: "justify" }),
      icon: AlignJustifyIcon,
    },
  ];

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        asChild
        className="text-sm font-medium h-8 px-2 transition-colors hover:rounded-md dark:text-zinc-50 dark:hover:text-zinc-400 dark:hover:bg-zinc-800"
      >
        <div className="flex justify-center items-center">
          <MoreVerticalIcon size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        ref={containerRef.current}
        className="w-fit min-w-0"
      >
        <ToggleGroup type="single" className="w-fit">
          {aligns.map((align, index) => (
            <button
              key={index}
              type="button"
              value={align.name}
              onClick={align.command}
              className={cn(
                "h-8 px-2 bg-transparent inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 hover:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 dark:focus-visible:ring-zinc-300",
                {
                  "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50":
                    align.isActive(),
                }
              )}
            >
              <align.icon size={16} />
            </button>
          ))}
        </ToggleGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignSelector;
