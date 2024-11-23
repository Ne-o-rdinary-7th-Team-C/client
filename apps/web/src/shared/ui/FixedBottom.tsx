import { ComponentPropsWithoutRef } from "react";

export const FixedBottom = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children, ...rest } = props;
  return <div className=" fixed bottom-0 left-[50%] translate-x-[-50%] w-screen max-w-[450px]"></div>;
};
