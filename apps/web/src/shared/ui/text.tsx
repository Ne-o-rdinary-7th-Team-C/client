import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

const fontVariants = cva("", {
  variants: {
    variant: {
      display03: "text-[24px] leading-[34px] font-bold tracking-[0px]",
      display02: "text-[28px] leading-[38px] font-bold tracking-[0px]",
      display01: "text-[24px] leading-[34px] font-bold tracking-[0px]",
      headline: "text-[20px] leading-[28px] font-bold tracking-[0px]",
      "headline-m": "text-[20px] leading-[28px] font-medium tracking-[0px]",
      subhead03: "text-[16px] leading-[22px] font-bold tracking-[0px]",
      "subhead-long-3": "text-[16px] leading-[28px] font-bold tracking-[0px]",
      subhead02: "text-[14px] leading-[20px] font-bold tracking-[0px]",
      "subhead-long-2": "text-[14px] leading-[24px] font-bold tracking-[0px]",
      subhead01: "text-[12px] leading-[18px] font-bold tracking-[0px]",
      body02: "text-[12px] leading-[18px] font-medium tracking-[0px]",
      "body-long-02": "text-[14px] leading-[20px] font-medium tracking-[0px]",
      body01: "text-[12px] leading-[16px] font-medium tracking-[0px]",
      "body-long-01": "text-[14px] leading-[20px] font-medium tracking-[0px]",
      caption: "text-[10px] leading-[14px] font-medium tracking-[0px]",
    },
  },
});

type Props = ComponentPropsWithoutRef<"span"> & VariantProps<typeof fontVariants>;
export const Text = ({ variant, ...props }: Props) => {
  return <span className={fontVariants({ variant })} {...props} />;
};
