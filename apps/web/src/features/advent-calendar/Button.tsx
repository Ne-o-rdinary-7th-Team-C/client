import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/src/shared/ui/cn";

const variants = cva("", {
  variants: {
    variant: {
      disbled: "",
    },
  },
});

type Props = ComponentPropsWithoutRef<"button"> & {};

export const AdventCalendarButton = (props: Props) => {
  const { className, children, ...rest } = props;
  return (
    <button className={cn(" w-full aspect-square bg-illustColor1 rounded-md ", className)} {...rest}>
      {children}
    </button>
  );
};
