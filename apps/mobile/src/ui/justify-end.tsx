import { ComponentProps } from "react";
import { View } from "react-native";
import { cn } from "./cn";

type Props = ComponentProps<typeof View>;

export const JustifyEnd = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <View className={cn("flex flex-1  flex-row justify-end", className)} {...rest}>
      {children}
    </View>
  );
};