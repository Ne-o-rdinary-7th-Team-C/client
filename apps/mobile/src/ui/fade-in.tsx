import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Animated } from "react-native";

type FadeInProps = PropsWithChildren<{
  ms: number;
}>;

export const FadeIn = (props: FadeInProps) => {
  const { ms, children } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: ms,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};
