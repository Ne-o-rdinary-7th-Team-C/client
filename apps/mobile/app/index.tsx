import { AppWebview } from "@/src/components/app-webview";
import { Fragment } from "react";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <Fragment>
      <AppWebview />
      <View style={{ backgroundColor: "#ffffff", display: "none" }}>
        <Button title="title" />
      </View>
    </Fragment>
  );
}
