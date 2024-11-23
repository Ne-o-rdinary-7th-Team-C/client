import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/src/shared/ui/cn";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: "normal" | "special";
  disabled?: boolean;
  selected?: boolean;
};

export const AdventCalendarButton = (props: Props) => {
  const { className, children, variant = "normal", disabled, selected, ...rest } = props;

  return (
    <button
      className={cn(
        " duration-200  transition-all",
        "aspect-square rounded-[16px] w-full bg-[#DC2244]  font-bold  text-[#FECD57] text-[28px]",
        className,
        disabled && " opacity-70",
        selected && " ring ring-[#FECD57]",
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
