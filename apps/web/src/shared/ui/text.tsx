import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

const fontVariants = cva("", {
  variants: {
    variant: {
      display03: " ",
      display02: "",
      dispay01: "",
      headline: "",
      "headline-m": "",
      subhead03: "",
      "subhead-long-3": "",
      subhead02: "",
      "subhead-long-2": "",
      subhead01: "",
      body02: "",
      "body-long-02": "",
      body01: "",
      "body-long-01": "",
      caption: "",
    },
  },
});

type Props = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof fontVariants>;
export const Text = ({ variant, ...props }: Props) => {
  return <span className={fontVariants({ variant })} {...props} />;
};
