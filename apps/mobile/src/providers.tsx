import { PropsWithChildren } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export const Providers = (props: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </SafeAreaProvider>
  );
};
