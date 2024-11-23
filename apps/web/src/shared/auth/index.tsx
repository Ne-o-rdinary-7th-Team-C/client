import { useIsMounted } from "@xionwcfm/react";
import { useAtomValue, useSetAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";
import { ReactNode, useCallback } from "react";

export type AuthState = {
  accessToken: string;
  isLogin: boolean;
};

const authAtom = atomWithStorage<AuthState>("@team_cmc_c_auth_state", { accessToken: "", isLogin: false });

export const useAuthState = () => {
  return useAtomValue(authAtom);
};

export const useLogin = () => {
  const setter = useSetAtom(authAtom);
  return useCallback((accessToken: string) => {
    setter((prev) => ({
      accessToken,
      isLogin: true,
    }));
  }, []);
};

export const useLogout = () => {
  const setter = useSetAtom(authAtom);
  return useCallback(() => {
    setter((prev) => ({
      accessToken: "",
      isLogin: false,
    }));
  }, []);
};

export const SignedIn = (props: { children?: ReactNode; fallback?: ReactNode }) => {
  const isMount = useIsMounted();
  const { isLogin } = useAuthState();
  if (isMount) {
    return null;
  }

  if (!isLogin) {
    return props.fallback ?? null;
  }

  return props.children;
};
