import { Alert } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Device from "expo-device";

async function getExpoPushToken(): Promise<string | null> {
  // 물리 기기에서만 푸시 알림을 사용할 수 있습니다.
  if (!Device.isDevice) {
    Alert.alert(
      "물리적 기기가 필요합니다",
      "푸시 알림은 실제 기기에서만 테스트할 수 있습니다. 실제 기기에서 실행해주세요!",
    );
    return null;
  }

  try {
    // Expo 푸시 토큰 가져오기
    const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

    if (!projectId) {
      Alert.alert("프로젝트 ID 누락", "프로젝트 ID가 없습니다. EAS 프로젝트 설정을 확인해주세요.");
      return null;
    }

    const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    console.log("푸시 토큰:", token);
    return token;
  } catch (error) {
    console.error("푸시 토큰 가져오기 오류:", error);
    return null;
  }
}

export default getExpoPushToken;
