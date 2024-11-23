import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const JustifyEnd = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("flex justify-end", className)} {...props} />;
};
