import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

const buttonVariants = cva(" duration-200 transition-all active:scale-[0.99]", {
  variants: {
    variant: {
      primary: "text-subhead03 text-white rounded-small bg-primaryColor2 active:bg-primaryColor1 disabled:bg-disabled",
      outline:
        "text-subhead03 text-primaryColor2 disabled:text-disabled bg-white active:bg-primaryColor3 rouded-small border-[1px] border-primaryColor2 disabled:border-disabled",
    },
    size: {
      sm: " w-[124px] h-[48px]",
      md: "w-[240px] h-[48px]",
      lg: "w-full h-[48px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type Props = ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants>;

export const Button = ({ variant, size, className, children, ...props }: Props) => {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
};
