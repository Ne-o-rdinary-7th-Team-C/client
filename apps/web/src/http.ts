import { createHttp, createInstance } from "@internal/http";
import { AuthState } from "./shared/auth";

export const httpInstance = createInstance({
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MzUwODQ4MDB9.cmLnN3Qu2GmO0Bvh1Xbc_7rvL5v1L6f9A38ybrW84BA`,
  },
  prefixUrl: "http://skyofseoul.synology.me:44333",
  hooks: {
    beforeRequest: [
      (request) => {
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
  prefixUrl: "http://skyofseoul.synology.me:44333",
});
