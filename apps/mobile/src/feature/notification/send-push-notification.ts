import {
  PushNotificationMessage,
  PushNotificationResponse,
} from "@internal/bridge/src";
import http from "../../http";

export async function sendPushNotification(
  expoPushToken: string,
  option: Omit<PushNotificationMessage, "to">
): Promise<PushNotificationResponse | null> {
  try {
    const message: PushNotificationMessage = {
      to: expoPushToken,
      sound: option.sound ?? "default",
      title: option.title,
      body: option.body,
      data: option.data ?? {},
    };
    console.log("알림 전송 시작:", expoPushToken);

    const response = await http.post<
      PushNotificationMessage,
      PushNotificationResponse
    >("https://exp.host/--/api/v2/push/send", message);

    return response;
  } catch (error) {
    console.error("푸시 알림 전송 실패:", error);
    return null;
  }
}
