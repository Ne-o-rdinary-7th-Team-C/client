import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const JustifyBetween = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("flex justify-between", className)} {...props} />;
};
