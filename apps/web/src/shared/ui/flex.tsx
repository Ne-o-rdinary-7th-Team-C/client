import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const Flex = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("flex ", className)} {...props} />;
};
