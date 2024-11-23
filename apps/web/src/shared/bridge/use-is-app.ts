import { useIsMounted } from "@xionwcfm/react";
import { useEffect, useState } from "react";
import { isApp } from "./is-app";

export const useIsApp = () => {
  const isMounted = useIsMounted();
  const [isAppState, setIsApp] = useState(false);
  useEffect(() => {
    if (isApp()) {
      setIsApp(true);
    }
  }, []);
  return isAppState && isMounted;
};
