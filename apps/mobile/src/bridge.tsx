import { createWebView, bridge } from "@webview-bridge/react-native";
import { uploadImage } from "./feature/images/upload-image";
import { downloadImage } from "./feature/images/download-image";
import { openExternalUrl } from "./feature/linking/open-external-url";
import { copyClipboard } from "./feature/clipboard/copy-clipboard";
import { getUserAppVersion } from "./feature/app-version/get-user-app-version";
import { requestReview } from "./feature/review/request-review";
import { openSetting } from "./feature/open-setting/open-setting";
import { canPushNotification } from "./feature/notification/can-push-notification";
import getExpoPushToken from "./feature/notification/get-push-token";
import { requestNotificationPermission } from "./feature/notification/request-notification-permission";
import { sendPushNotification } from "./feature/notification/send-push-notification";
import { openInAppUrl } from "./feature/linking/open-in-app-url";
import { notifyStatusBar } from "./components/status-bar";
import { notifySafeArea } from "./components/safe-area";
import { type AbstractBridgeFunctions } from "@internal/bridge";

export const appBridge = bridge<AbstractBridgeFunctions>({
  //image configuration
  uploadImage,
  downloadImage,
  //linking configuration
  openExternalUrl,
  openInAppUrl,
  openSetting,
  //clipboard configuration
  copyClipboard,
  //review configuration
  requestReview,
  //notification configuration
  canPushNotification,
  getPushToken: getExpoPushToken,
  requestNotificationPermission,
  sendPushNotification,
  notifyStatusBar,
  notifySafeArea,
  async getUserAppVersion() {
    return getUserAppVersion();
  },
});

export const { WebView, postMessage } = createWebView({
  bridge: appBridge,
  debug: true,
  fallback: (method) => {
    console.warn(`Method '${method}' not found in native`);
  },
});
