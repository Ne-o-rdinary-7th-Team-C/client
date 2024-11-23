import React, { createContext, useContext, useRef, ReactNode, useState, Fragment } from "react";
import { WebViewProps, WebView } from "react-native-webview";
import { WebView as BridgeWebView } from "./bridge";

interface WebViewContextType {
  webViewRef: React.RefObject<WebView>;
  navigate: (url: string) => void;
}

const WebViewContext = createContext<WebViewContextType | undefined>(undefined);

export const WebViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const webViewRef = useRef<WebView>(null);

  const navigate = (url: string) => {
    webViewRef.current?.injectJavaScript(`window.location.href = '${url}';`);
  };

  return <WebViewContext.Provider value={{ webViewRef, navigate }}>{children}</WebViewContext.Provider>;
};

export const useWebView = () => {
  const context = useContext(WebViewContext);
  if (context === undefined) {
    throw new Error("useWebView must be used within a WebViewProvider");
  }
  return context;
};

export const SharedWebView = (
  props: WebViewProps & {
    fallback?: ReactNode;
    errorFallback?: ReactNode;
  },
) => {
  const { fallback, errorFallback } = props;
  const { webViewRef } = useWebView();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  return (
    <Fragment>
      <BridgeWebView
        {...props}
        ref={webViewRef}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={(event) => setError(event.nativeEvent.description)}
        onContentProcessDidTerminate={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("Content process terminated, reloading", nativeEvent);
          webViewRef.current?.reload();
        }}
      />
      {isLoading && fallback}
      {error && errorFallback}
    </Fragment>
  );
};
