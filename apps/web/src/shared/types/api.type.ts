export type ApiResponse<T> = {
  resultType: "SUCCESS";
  error: null;
  success: T;
};

export type ApiError<T> = {
  resultType: "FAIL";
  error: {
    errorCode: "A100";
    reason: "오류 원인";
    data: T;
  };
  success: null;
};
