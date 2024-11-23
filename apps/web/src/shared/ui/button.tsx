import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

const buttonVariants = cva(" duration-200 transition-all active:scale-[0.99]", {
  variants: {
    variant: {
      primary: "",
      outline: "",
    },
    size: {
      sm: " w-[124px]",
      md: "w-[240px] ",
      lg: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type Props = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = ({ variant, size, className, ...props }: Props) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
