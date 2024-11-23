import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import { cn } from "./cn";
import { cva, VariantProps } from "class-variance-authority";

// focus: << 인풋에 포커싱이 가있을 때 스타일
// disabled: << 인풋이 비활성화 되었을 때 스타일
// 그냥 << 평소 스타일
const inputVarinats = cva(" transition-all duration-200", {
  variants: {
    variant: {
      outline: "",
    },
  },
});

type Props = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputVarinats>;

export const Input = forwardRef(function Input(
  props: Props,
  ref: Ref<HTMLInputElement>
) {
  const { className, variant, ...rest } = props;
  return (
    <input
      ref={ref}
      className={cn(inputVarinats({ variant }), className)}
      {...rest}
    />
  );
});
