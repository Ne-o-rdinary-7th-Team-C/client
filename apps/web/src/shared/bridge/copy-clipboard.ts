import { isApp } from "./is-app";
import { bridge } from "@internal/bridge-web";

export const copyCLipboard = (link: string) => {
  if (isApp()) {
    return bridge.copyClipboard(link);
  }
  return window.navigator.clipboard.writeText(link);
};
