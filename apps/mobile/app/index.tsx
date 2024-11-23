import { AppWebview } from "@/src/components/app-webview";
import { Fragment } from "react";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <AppWebview />
    </View>
  );
}
