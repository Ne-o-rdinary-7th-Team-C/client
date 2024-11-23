import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import { cn } from "./cn";
import { cva, VariantProps } from "class-variance-authority";

const inputVarinats = cva(
  "flex w-full h-[48px] px-[16px] py-[13px] items-center gap-[10px] text-[16px] rounded-small transition-all duration-200",
  {
    variants: {
      variant: {
        outline: `
          border border-line
          focus:border-black
          disabled:border-none

          placeholder:text-midEmphasis
          text-black
          disabled:text-midEmphasis

          bg-white
          disabled:bg-disabled
        `,
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

type Props = ComponentPropsWithoutRef<"input"> & VariantProps<typeof inputVarinats>;

export const Input = forwardRef(function Input(props: Props, ref: Ref<HTMLInputElement>) {
  const { className, variant, ...rest } = props;
  return <input ref={ref} className={cn(inputVarinats({ variant }), className)} {...rest} />;
});
