import { BubbleMenu, BubbleMenuProps } from "@tiptap/react";
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { FC, useRef, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { TfiParagraph } from "react-icons/tfi";
import HeadingSelector from "./heading-selector";
import AlignSelector from "./align-selector";
import { cn } from "@/lib/utils";

export interface EditorBubbleMenuItem {
  name: string;
  isActive: () => boolean | undefined;
  command: () => void;
  icon: typeof BoldIcon | typeof TfiParagraph;
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children">;

export const EditorBubbleMenu: FC<EditorBubbleMenuProps> = (props) => {
  const menus: EditorBubbleMenuItem[] = [
    {
      name: "bold",
      isActive: () => props.editor?.isActive("bold"),
      command: () => props.editor?.chain().focus().toggleBold().run(),
      icon: BoldIcon,
    },
    {
      name: "italic",
      isActive: () => props.editor?.isActive("italic"),
      command: () => props.editor?.chain().focus().toggleItalic().run(),
      icon: ItalicIcon,
    },
    {
      name: "underline",
      isActive: () => props.editor?.isActive("underline"),
      command: () => props.editor?.chain().focus().toggleUnderline().run(),
      icon: UnderlineIcon,
    },
    {
      name: "strike",
      isActive: () => props.editor?.isActive("strike"),
      command: () => props.editor?.chain().focus().toggleStrike().run(),
      icon: StrikethroughIcon,
    },
  ];

  const [isHeadingSelectorOpen, setIsHeadingSelectorOpen] = useState(false);
  const [isColorSelectorOpen, setIsColorSelectorOpen] = useState(false);
  const [isLinkSelectorOpen, setIsLinkSelectorOpen] = useState(false);
  const [isAlignSelectorOpen, setIsAlignSelectorOpen] = useState(false);

  const containerRef = useRef(null);

  const bubbleMenuProps: EditorBubbleMenuProps = {
    ...props,
    shouldShow: ({ state, editor, view, oldState, from, to }) => {
      const { selection } = state;
      const { empty } = selection;

      // don't show bubble menu if:
      // - the selected node is an image
      // - the selection is empty
      // - the selection is a node selection (for drag handles)
      if (editor.isActive("image") || empty) {
        return false;
      }

      // if (!empty && !editor.isFocused) {
      // console.log("berhasil");

      //   return true;
      // }
      return true;
    },
    tippyOptions: {
      moveTransition: "transform 0.15s ease-out",
      onHidden: () => {
        setIsHeadingSelectorOpen(false);
        setIsColorSelectorOpen(false);
        setIsLinkSelectorOpen(false);
        setIsAlignSelectorOpen(false);
      },
    },
  };

  return (
    <BubbleMenu {...bubbleMenuProps}>
      <div ref={containerRef}>
        <ToggleGroup
          type="multiple"
          className="p-1 bg-zinc-950 border border-zinc-800 rounded-md"
        >
          <HeadingSelector
            editor={props.editor}
            setIsOpen={setIsHeadingSelectorOpen}
            isOpen={isHeadingSelectorOpen}
            containerRef={containerRef}
          />

          {menus.map((menu, index) => (
            <button
              key={index}
              value={menu.name}
              onClick={menu.command}
              type="button"
              className={cn(
                "h-8 px-2 bg-transparent inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 hover:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 dark:focus-visible:ring-zinc-300",
                {
                  "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50":
                    menu.isActive(),
                }
              )}
            >
              <menu.icon size={16} />
            </button>
          ))}

          <AlignSelector
            editor={props.editor}
            setIsOpen={setIsAlignSelectorOpen}
            isOpen={isAlignSelectorOpen}
            containerRef={containerRef}
          />
        </ToggleGroup>
      </div>
    </BubbleMenu>
  );
};
