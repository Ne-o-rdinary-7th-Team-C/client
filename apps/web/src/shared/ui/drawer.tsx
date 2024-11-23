import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "./cn";

const Root = ({ shouldScaleBackground = true, ...props }: ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Root.displayName = "Drawer";

const Trigger = forwardRef<
  ElementRef<typeof DrawerPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props;
  return <DrawerPrimitive.Trigger {...rest} className={cn(className)} ref={ref} />;
});

const Portal = DrawerPrimitive.Portal;

const Close = DrawerPrimitive.Close;

const Handle = DrawerPrimitive.Handle;

const Overlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={`fixed inset-0  bg-[rgba(0,0,0,0.4)]  ${className}`} {...props} />
));

const Content = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <div className=" fixed w-screen max-w-[450px] bottom-0 left-[50%] -translate-x-[50%]">
    <DrawerPrimitive.Content
      ref={ref}
      className={cn("flex h-auto flex-col rounded-t-[10px] border bg-white ", className)}
      {...props}
    >
      <Handle className=" top-[8px] w-[40px] rounded-full bg-gray-400" />
      <div className=" h-[28px]" />

      {children}
    </DrawerPrimitive.Content>
  </div>
));

Content.displayName = "DrawerContent";

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={"grid gap-[6px] p-[16px] text-center sm:text-left"} {...props} />
);
Header.displayName = "DrawerHeader";

const Footer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={"mt-auto flex flex-col gap-[8px] p-[16px]"} {...props} />
);
Footer.displayName = "DrawerFooter";

const Title = forwardRef<
  ElementRef<typeof DrawerPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => <DrawerPrimitive.Title ref={ref} className={className} {...props} />);

const Description = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => <DrawerPrimitive.Description ref={ref} className={className} {...props} />);

export { Root, Trigger, Portal, Close, Handle, Overlay, Content, Header, Footer, Title, Description };
