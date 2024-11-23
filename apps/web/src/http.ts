import { createHttp, createInstance } from "@internal/http";

const httpInstance = createInstance({
  headers: {
    Authorization: `Bearer`,
  },
});

export const authHttp = createHttp(httpInstance);

export const http = createHttp();
