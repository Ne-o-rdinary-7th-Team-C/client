import { createHttp, createInstance } from "@internal/http";
import { AuthState } from "./shared/auth";

export const httpInstance = createInstance({
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MzUwODQ4MDB9.cmLnN3Qu2GmO0Bvh1Xbc_7rvL5v1L6f9A38ybrW84BA`,
  },
  prefixUrl: "https://test2.shop",
  hooks: {
    beforeRequest: [
      (request) => {
        if (typeof window === "undefined") {
          return;
        }
        const token = localStorage.getItem("@team_cmc_c_auth_state"); // fallback용
        if (token) {
          const parse = JSON.parse(token) as AuthState;
          request.headers.set("Authorization", `Bearer ${parse.accessToken}`);
        }
      },
    ],
  },
});

export const authHttp = createHttp(httpInstance);

export const http = createHttp({
  prefixUrl: "https://test2.shop",
});
