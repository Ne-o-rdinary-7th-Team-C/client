import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const variants = cva("", {
  variants: {
    variant: {
      disbled: "",
      
    },
  },
});

type Props = ComponentPropsWithoutRef<"button"> & {};

export const AdventCalendarButton = () => {};
