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
      command: () => editor?.chain().focus().run(),
      isActive: () => editor?.isActive("center"),
      icon: AlignLeftIcon,
    },
    {
      name: "Center",
      command: () => editor?.chain().focus().run(),
      isActive: () => editor?.isActive("center"),
      icon: AlignJustifyIcon,
    },
    {
      name: "Right",
      command: () => editor?.chain().focus().run(),
      isActive: () => editor?.isActive("center"),
      icon: AlignRightIcon,
    },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        className="text-sm font-medium h-8 px-2 transition-colors hover:rounded-md dark:text-zinc-50 dark:hover:text-zinc-400 dark:hover:bg-zinc-800"
      >
        <div className="flex justify-center items-center">
          <MoreVerticalIcon size={16} />
        </div>
      </DropdownMenuTrigger>
      {/* <DropdownMenuPortal container={containerRef.current}> */}
      <DropdownMenuContent
        align="center"
        ref={containerRef.current}
        className="w-fit min-w-0"
      >
        <ToggleGroup type="single" className="w-fit">
          {aligns.map((align, index) => (
            <ToggleGroupItem
              key={index}
              value={align.name}
              onClick={align.command}
            >
              <align.icon size={16} />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </DropdownMenuContent>
      {/* </DropdownMenuPortal> */}
    </DropdownMenu>
  );
};

export default AlignSelector;
