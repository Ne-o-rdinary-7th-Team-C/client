import { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const FixedBottom = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children, ...rest } = props;
  return (
    <div className={cn(className, " fixed bottom-0 left-[50%] translate-x-[-50%] w-screen max-w-[450px]")} {...rest}>
      {children}
    </div>
  );
};
