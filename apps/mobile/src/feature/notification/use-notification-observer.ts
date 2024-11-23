import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";

const registerForPushNotificationsAsync = async () => {
  // const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  // if (status !== "granted") {
  //   console.warn("Failed to get push token for push notification!");
  //   return;
  // }
  // const token = (await Notifications.getExpoPushTokenAsync()).data;
  // console.log(token); // 서버에 토큰 전달
};

function redirect(notification: Notifications.Notification) {
  const url = notification.request.content.data?.url;
  if (url) {
    router.push(url);
  }
}

export function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    registerForPushNotificationsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirect(response.notification);
      }
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}
