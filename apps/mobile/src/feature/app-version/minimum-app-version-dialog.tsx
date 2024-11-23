import { useSuspenseQuery } from "@tanstack/react-query";
import { getMinimumAppVersionQueryOptions } from "./get-minimum-app-version-query-options";
import { getUserAppVersion } from "./get-user-app-version";
import { validateMinimumAppVersion } from "./check-minimum-app-version";
import { getUpdateUrl } from "../../constants";
import { Linking, Alert } from "react-native";
import { useEffect } from "react";

export const MinimumAppVersionDialog = () => {
  const { data: minimumAppVersion } = useSuspenseQuery(getMinimumAppVersionQueryOptions());
  const userAppVersion = getUserAppVersion();
  const shouldUpdate = !validateMinimumAppVersion(minimumAppVersion, userAppVersion);
  const isomorphicUpdateUrl = getUpdateUrl();

  useEffect(() => {
    if (shouldUpdate) {
      Alert.alert(
        "업데이트가 필요해요",
        "앱의 최신 버전으로 업데이트 후 사용 가능합니다.",
        [
          {
            text: "업데이트 하기",
            onPress: () => {
              Linking.openURL(isomorphicUpdateUrl).catch((err) => {
                console.error("Unable to open URL:", err);
              });
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [shouldUpdate, isomorphicUpdateUrl]);

  return null;
};
