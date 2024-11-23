import { createHttp, createInstance } from "@internal/http";

export const http = createHttp();

const httpInstance = createInstance({
  headers: {
    Authorization: `Bearer`,
  },
});

export const authHttp = createHttp(httpInstance);
