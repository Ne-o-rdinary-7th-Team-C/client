import { PropsWithChildren, useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Observable } from "@xionwcfm/utils";
import { SafeAreaEdges } from "@internal/bridge";

class SafeAreaObservable extends Observable<SafeAreaEdges[]> {
  edges: SafeAreaEdges[];
  constructor(edges: SafeAreaEdges[]) {
    super();
    this.edges = edges;
  }
}

const safeAreaObservable = new SafeAreaObservable([
  "bottom",
  "left",
  "right",
  "top",
]);

export const SafeArea = ({ children }: PropsWithChildren) => {
  const [safeAreaState, setSafeAreaState] = useState(() => {
    return safeAreaObservable.edges;
  });

  useEffect(() => {
    safeAreaObservable.subscribe(setSafeAreaState);
    return () => safeAreaObservable.unsubscribe(setSafeAreaState);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={safeAreaState} style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const notifySafeArea = async (edges: SafeAreaEdges[]) => {
  safeAreaObservable.notify(edges);
};
