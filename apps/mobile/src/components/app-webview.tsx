import { memo } from "react";
import { WebView } from "../bridge";

const BASE_URL = !__DEV__ ? "http://127.0.0.1:3000" : "https://cmcteamc.vercel.app";
const DECELERATION_RATE = 0.999;
const JAVASCRIPT_BEFORE_CONTENTLOADED = `window.__APP_DEV__="${__DEV__ ? "development" : "production"}";`;

export const AppWebview = () => {
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
};
