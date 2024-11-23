import { ComponentProps } from "react";
import { View } from "react-native";
import { cn } from "./cn";

type Props = ComponentProps<typeof View>;

export const Flex = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <View className={cn("flex flex-1 flex-row", className)} {...rest}>
      {children}
    </View>
  );
};
