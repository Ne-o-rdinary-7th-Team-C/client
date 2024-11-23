import { ComponentProps } from "react";
import { ScrollView, View } from "react-native";
import { cn } from "./cn";

export type BoxProps = ComponentProps<typeof View> & { scrollable?: boolean };

export const Box = (props: BoxProps) => {
  const { children, className, scrollable, ...rest } = props;
  const Component = scrollable ? ScrollView : View;
  return (
    <Component className={cn("", className)} {...rest}>
      {children}
    </Component>
  );
};
