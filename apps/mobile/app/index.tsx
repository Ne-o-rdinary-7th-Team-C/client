import { AppWebview } from "@/src/components/app-webview";
import { copyClipboard } from "@/src/feature/clipboard/copy-clipboard";
import { Fragment } from "react";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <Fragment>
      <AppWebview />
      <View style={{ backgroundColor: "#ffffff", display: "none" }}>
        <Button title="title" onPress={() => copyClipboard("hello")} />
      </View>
    </Fragment>
  );
}
