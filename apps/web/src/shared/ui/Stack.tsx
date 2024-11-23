import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const Stack = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("flex flex-col", className)} {...props} />;
};
