import { useRef } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

const BASE_URL = __DEV__ ? "http://localhost:3000" : "https://app.azito.kr";
const DECELERATION_RATE = 0.999;
const JAVASCRIPT_BEFORE_CONTENTLOADED = `window.__APP_DEV__="${
  __DEV__ ? "development" : "production"
}";`;

export default function Page() {
  const ref = useRef<WebView>(null);
  return (
    <WebView
      source={{ uri: BASE_URL }}
      style={{ flex: 1 }}
      mixedContentMode={"always"}
      webviewDebuggingEnabled={__DEV__}
      javaScriptEnabled
      bounces
      allowsBackForwardNavigationGestures
      decelerationRate={DECELERATION_RATE}
      overScrollMode={"never"}
      scrollEnabled
      injectedJavaScriptBeforeContentLoaded={JAVASCRIPT_BEFORE_CONTENTLOADED}
    />
  );
}
