import { useIsMounted } from "@xionwcfm/react";
import { useAtomValue, useSetAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";
import { ReactNode, useCallback } from "react";

export type AuthState = {
  accessToken: string;
  isLogin: boolean;
  user_id: number;
};

const authAtom = atomWithStorage<AuthState>("@team_cmc_c_auth_state", {
  accessToken: "",
  isLogin: false,
  user_id: 0,
});

export const useAuthState = () => {
  return useAtomValue(authAtom);
};

export const useLogin = () => {
  const setter = useSetAtom(authAtom);
  return useCallback((accessToken: string, user_id: number) => {
    setter((prev) => ({
      accessToken,
      user_id,
      isLogin: true,
    }));
  }, []);
};

export const useLogout = () => {
  const setter = useSetAtom(authAtom);
  return useCallback(() => {
    setter((prev) => ({
      accessToken: "",
      user_id: 0,
      isLogin: false,
    }));
  }, []);
};

export const SignedIn = (props: { children?: ReactNode; fallback?: ReactNode }) => {
  const isMount = useIsMounted();
  const { isLogin } = useAuthState();
  if (!isMount) {
    return null;
  }

  if (!isLogin) {
    return props.fallback ?? null;
  }

  return props.children;
};
