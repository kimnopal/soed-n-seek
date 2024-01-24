import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideSearch } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "icon";
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, icon, ...props }, ref) => {
    return (
      <div className="flex relative items-center">
        <div className="absolute left-0 w-10 flex justify-center text-zinc-400">
          {variant == "icon" && icon}
        </div>
        <input
          type={type}
          className={cn(
            variant == "icon" ? "pr-3 pl-10" : "px-3",
            "flex h-10 w-full rounded-md border border-zinc-200 bg-white py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
