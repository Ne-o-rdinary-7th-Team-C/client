import * as Notifications from "expo-notifications";

export const canPushNotification = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  return status === "granted";
};
