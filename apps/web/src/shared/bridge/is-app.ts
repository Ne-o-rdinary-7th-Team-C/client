export const isApp = () => {
  return typeof window?.ReactNativeWebView !== "undefined";
};
