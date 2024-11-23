import * as DialogPrimtive from "@radix-ui/react-dialog";
import { cn } from "./cn";
import { forwardRef } from "react";

export const Root = DialogPrimtive.Root;
export const Trigger = DialogPrimtive.Trigger;
export const Content = DialogPrimtive.Content;

export const Overlay = forwardRef<
  React.ElementRef<typeof DialogPrimtive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimtive.Overlay> & {
    nostyle?: boolean;
  }
>(({ className, nostyle, ...props }, forwardRef) => {
  return (
    <DialogPrimtive.Overlay
      {...props}
      ref={forwardRef}
      className={cn(
        !nostyle &&
          `
        data-[state=open]:animate-in data-[state=open]:fade-in-0
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0  
        fixed inset-0 backdrop-blur  bg-[rgba(0,0,0,0.4)]
        `,
        className
      )}
    />
  );
});
export const Portal = DialogPrimtive.Portal;
