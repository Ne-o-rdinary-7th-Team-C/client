import { ComponentProps } from "react";
import { Box } from "./box";
import { cn } from "./cn";

type Props = ComponentProps<typeof Box> & { scrollable?: boolean };

export const Vertical = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <Box className={cn("flex flex-col", className)} {...rest}>
      {children}
    </Box>
  );
};
