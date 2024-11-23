import { Platform } from "react-native";

export const IPHONE_REVIEW_ID = "6572301349";
export const ANDROID_REVIEW_ID = "com.azitorn";

export const getUpdateUrl = () =>
  Platform.OS === "ios"
    ? `https://apps.apple.com/app/id${IPHONE_REVIEW_ID}`
    : `https://play.google.com/store/apps/details?id=${ANDROID_REVIEW_ID}`;
