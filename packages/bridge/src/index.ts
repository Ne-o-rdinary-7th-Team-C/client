import { bridge } from "@webview-bridge/react-native";

export type SafeAreaEdges = "top" | "right" | "bottom" | "left";

export type StatusBarStyle = "auto" | "inverted" | "light" | "dark";

export type StatusBarAnimation = "none" | "fade" | "slide";

export type StatusBarProps = {
  style?: StatusBarStyle;
  animated?: boolean;
  hidden?: boolean;
  hideTransitionAnimation?: StatusBarAnimation;
  networkActivityIndicatorVisible?: boolean;
  backgroundColor?: string;
  translucent?: boolean;
};

export interface PushNotificationMessage {
  to: string; // Expo 푸시 토큰
  sound?: "default" | null;
  title: string;
  body: string;
  data?: {
    [key: string]: any;
    url?: string;
  };
}

export interface PushNotificationResponse {
  data: string;
  status: string;
  id?: string;
  message?: string;
}

export type DownloadImageReturn =
  | {
      status:
        | "permission_denied"
        | "permission_required"
        | "canceled"
        | "download_failed";
      success: false;
    }
  | {
      status: "success";
      success: true;
    };

export type ImageAsset = {
  uri: string;
  assetId?: string | null;
  width: number;
  height: number;
  type?: "image" | "video";
  fileName?: string | null;
  fileSize?: number;
  exif?: Record<string, any> | null;
  base64: string;
  duration?: number | null;
  mimeType?: string;
};

export type UploadImageReturn =
  | {
      status: "permission_denied" | "permission_required" | "canceled";
      success: false;
      value: ImageAsset[];
    }
  | {
      status: "success";
      success: true;
      value: ImageAsset[];
    };

export type AbstractBridgeFunctions = {
  uploadImage: () => Promise<UploadImageReturn>;
  downloadImage: (url: string) => Promise<DownloadImageReturn>;
  openInAppUrl: (url: string) => Promise<void>;
  openExternalUrl: (url: string) => Promise<void>;
  openSetting: () => Promise<void>;
  copyClipboard: (text: string) => Promise<void>;
  requestReview: () => Promise<boolean>;
  getUserAppVersion: () => Promise<string | null>;
  canPushNotification: () => Promise<boolean>;
  getPushToken: () => Promise<string | null>;
  requestNotificationPermission: () => Promise<void>;
  sendPushNotification: (
    expoPushToken: string,
    option: Omit<PushNotificationMessage, "to">
  ) => Promise<PushNotificationResponse | null>;
  notifyStatusBar: (state: StatusBarProps) => Promise<void>;
  notifySafeArea: (edges: SafeAreaEdges[]) => Promise<void>;
};

const typeBridge = bridge<AbstractBridgeFunctions>({} as any);

export type AppBridge = typeof typeBridge;
