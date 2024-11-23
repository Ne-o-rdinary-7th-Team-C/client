import { AppBridge } from "@internal/bridge";
import { linkBridge } from "@webview-bridge/web";

export const bridge = linkBridge<AppBridge>();
