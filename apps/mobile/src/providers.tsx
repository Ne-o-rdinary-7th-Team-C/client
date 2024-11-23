import {
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans-kr";
import { usePullToRefresh } from "@/src/feature/pull-to-refresh/use-pull-to-refresh";
import { ErrorBoundary } from "@suspensive/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, Suspense, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, RefreshControl, ScrollView } from "react-native";
import { useWebView, WebViewProvider } from "./webview-context";
import { useNotificationObserver } from "./feature/notification/use-notification-observer";
import { InternalStatusBar } from "./components/status-bar";
import { SafeArea } from "./components/safe-area";

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { gcTime: 1000 * 60 * 60 * 24, staleTime: 1000 * 60 },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={null}>
        <Suspense>
          <WebViewProvider>
            <FontProvider>
              <KeyboardAvoidingProvider>
                <InternalStatusBar />
                <SafeArea>
                  <RefreshProvider>{children}</RefreshProvider>
                </SafeArea>
                <NotificationInitializer />
              </KeyboardAvoidingProvider>
            </FontProvider>
          </WebViewProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

const NotificationInitializer = ({ children }: PropsWithChildren) => {
  useNotificationObserver();
  return children;
};

const KeyboardAvoidingProvider = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      {children}
    </KeyboardAvoidingView>
  );
};

const RefreshProvider = ({ children }: PropsWithChildren) => {
  const { webViewRef } = useWebView();
  const [refreshing, onRefresh] = usePullToRefresh(webViewRef);
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {children}
    </ScrollView>
  );
};

const FontProvider = ({ children }: PropsWithChildren) => {
  const [loaded, error] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return children;
};
