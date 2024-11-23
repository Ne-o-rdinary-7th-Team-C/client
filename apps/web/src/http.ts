import { createHttp, createInstance } from "@internal/http";

const httpInstance = createInstance({
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MzUwODQ4MDB9.cmLnN3Qu2GmO0Bvh1Xbc_7rvL5v1L6f9A38ybrW84BA`,
  },
  credentials: "include",
  prefixUrl: "http://skyofseoul.synology.me:44333",
});

export const authHttp = createHttp(httpInstance);

export const http = createHttp({
  prefixUrl: "http://skyofseoul.synology.me:44333",
});
