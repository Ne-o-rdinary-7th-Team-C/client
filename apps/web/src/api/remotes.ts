import { http, authHttp } from "~/src/http";
import { createMutation } from "@xionwcfm/react-query";
import { queryOptions } from "@tanstack/react-query";
import { ApiResponse } from "../shared/types/api.type";

const getUser = async () => http.get("/user");

const $queryKeys = {
  user: () => ["user"],
  questions: () => ["questions"],
  questionsByDate: (date: string) => ["questions", date],
  questionsViewUser: (user_id: string) => ["questions", user_id],
  questionsViewUserDate: (params: {
    user_id: string;
    date: string;
  }) => ["questions", params],
};

export const userQueryOptions = () => queryOptions({ queryKey: $queryKeys.user(), queryFn: getUser });

type PostUserLoginRequest = {
  login_id: string;
  password: string;
};

type PostUserLoginResponse = ApiResponse<{
  access_token: string;
  refresh_token: string;
}>;

const postUserLogin = async (body: PostUserLoginRequest): Promise<PostUserLoginResponse> => {
  return http.post<PostUserLoginRequest, PostUserLoginResponse>("/user/login", body);
};

// get 요청이 아닌 것은 모두 mutation으로 만듭니다.
export const useUserLogin = createMutation({ mutationFn: postUserLogin });

type PostUserValidationRequest = {
  login_id: string;
};

type PostUserValidationResponse = ApiResponse<{
  login_id: string;
}>;

const postUserValidation = async (body: PostUserValidationRequest): Promise<PostUserValidationResponse> => {
  return http.post<PostUserValidationRequest, PostUserValidationResponse>("/user/validation", body);
};

export const useUserValidation = createMutation({ mutationFn: postUserValidation });

type PostUserRegisterRequest = {
  login_id: string;
  password: string;
};

type PostUserRegisterResponse = ApiResponse<{
  user_id: number;
  login_id: string;
  color: null;
  nickname: null;
  created_at: string;
  updated_at: string;
}>;

const postUserRegister = async (body: PostUserRegisterRequest): Promise<PostUserRegisterResponse> => {
  return http.post<PostUserRegisterRequest, PostUserRegisterResponse>("/user/register", body);
};

export const useUserRegister = createMutation({ mutationFn: postUserRegister });

type PatchUserRegisterRequest = {
  color: string;
  nickname: string;
};

type PatchUserRegisterResponse = ApiResponse<{
  user_id: number;
  login_id: string;
  color: string;
  nickname: string;
  created_at: string;
  updated_at: string;
}>;

const patchUserRegister = async (body: PatchUserRegisterRequest): Promise<PatchUserRegisterResponse> => {
  return http.patch<PatchUserRegisterRequest, PatchUserRegisterResponse>("/user/register", body);
};

export const usePatchUserRegister = createMutation({ mutationFn: patchUserRegister });

type GetQuestionsResponse = {
  question_id: number;
  questioned_user_id: number;
  author_nickname: string;
  assigned_date: string;
  content: string;
  created_at: string;
  updated_at: string;
}[];
//**** */
const getQuestions = async () => {
  return http.get<GetQuestionsResponse>("/questions");
};

export const userQueryQuestions = () => queryOptions({ queryKey: $queryKeys.questions(), queryFn: getQuestions });

type GetQuestionsDateRequest = {
  date: string;
};

//***** */
type GetQuestionsDateResponse = ApiResponse<
  {
    question_id: number;
    questioned_user_id: number;
    author_nickname: string;
    assigned_date: string;
    content: string;
    created_at: string;
    updated_at: string;
  }[]
>;

const getQuestionsDate = async (param: GetQuestionsDateRequest) => {
  return http.get<GetQuestionsDateResponse>(`/questions/${param.date}`);
};

// get 요청인데 파람을 받아야하는 경우 이렇게 작성합니다
export const questionDateQueryOptions = (param: GetQuestionsDateRequest) =>
  queryOptions({
    queryKey: $queryKeys.questionsByDate(param.date),
    queryFn: async () => getQuestionsDate(param),
  });

type PostQuestionsAnswerRequest = {
  questioned_user_id: number;
  content: string;
};

type PostQuestionsAnswerResponse = ApiResponse<{
  created_at: string;
  updated_at: string;
  answer_id: number;
  question_id: number;
  content: string;
}>;
/*** */
const postQuestionsAnswer = async (param: PostQuestionsAnswerRequest & { question_id: string }) => {
  return http.post<any, PostQuestionsAnswerResponse>(`/${param.question_id}/answer`, param);
};

export const useQuestionsAnswer = createMutation({ mutationFn: postQuestionsAnswer });

/*** */
type GetQuestionsViewUserResponse = ApiResponse<number[]>;

const getQuestionsViewUser = async (param: { user_id: string }) => {
  return http.get<GetQuestionsViewUserResponse>(`/questions/view/user/${param.user_id}`);
};

export const userQueryQuestionsViewUser = (param: { user_id: string }) =>
  queryOptions({
    queryKey: $queryKeys.questionsViewUser(param.user_id),
    queryFn: async () => getQuestionsViewUser(param),
  });

const getQuestionsViewUserDate = async (param: {
  user_id: string;
  date: string;
}) => {
  const { user_id, date } = param;
  return http.get(`/questions/view/user/${user_id}/date/${date}`);
};

export const useQueryQuestionsViewUserDate = (params: {
  user_id: string;
  date: string;
}) =>
  queryOptions({
    queryKey: $queryKeys.questionsViewUserDate(params),
    queryFn: async () => getQuestionsViewUserDate(params),
  });

type PostQuestionsRequest = {
  questioned_user_id: number;
  author_nickname: string;
  assigned_date: string;
  content: string;
};

type PostQuestionsResponse = ApiResponse<{
  created_at: string;
  updated_at: string;
  question_id: number;
  questioned_user_id: number;
  author_nickname: string;
  assigned_date: string;
  content: string;
}>;

const postQuestions = async (body: PostQuestionsRequest) => {
  return http.post<PostQuestionsRequest, PostQuestionsResponse>(`/questions`, body);
};

export const usePostQuestions = createMutation({ mutationFn: postQuestions });

// import { http, authHttp } from "~/src/http";
// import { createMutation } from "@xionwcfm/react-query";
// import { queryOptions, usePrefetchQuery, useQuery, useSuspenseQuery } from "@tanstack/react-query";
// import { ApiResponse } from "../shared/types/api.type";
// import { wrap } from "@suspensive/react";

// const getUser = async () => http.get("/user");

// const $queryKeys = {
//   user: () => ["user"],
//   questions: () => ["questions"],
//   questionsByDate: (date: string) => ["questions", date],
// };

// export const userQueryOptions = () =>
//   queryOptions({ queryKey: $queryKeys.user(), queryFn: getUser });

// type PostUserLoginRequest = {
//   login_id: string;
//   password: string;
// };

// type PostUserLoginResponse = ApiResponse<{
//   access_token: string;
//   refresh_token: string;
// }>;

// const postUserLogin = async (
//   body: PostUserLoginRequest
// ): Promise<PostUserLoginResponse> => {
//   return http.post<PostUserLoginRequest, PostUserLoginResponse>(
//     "/user/login",
//     body
//   );
// };

// // get 요청이 아닌 것은 모두 mutation으로 만듭니다.
// export const useUserLogin = createMutation({ mutationFn: postUserLogin });

// const postUserValidation = async () => {
//   return http.post("/user/validation");
// };

// const postUserRegister = async () => {
//   return http.post("/user/register");
// };

// const patchUserRegister = async () => {
//   return http.patch("/user/register");
// };

// const getQuestions = async () => {
//   return http.get("/questions");
// };

// type GetQuestionsDateRequest = {
//   date: string;
// };

// type GetQuestionsDateResponse = ApiResponse<{
//   question_id: string;
//   question: string;
// }>;

// const getQuestionsDate = async (param: GetQuestionsDateRequest) => {
//   return http.get<GetQuestionsDateResponse>(`/questions/${param.date}`);
// };

// // get 요청인데 파람을 받아야하는 경우 이렇게 작성합니다
// export const questionDateQueryOptions = (param: GetQuestionsDateRequest) =>
//   queryOptions({
//     queryKey: $queryKeys.questionsByDate(param.date),
//     queryFn: async () => getQuestionsDate(param),
//   });

//   const Hi = () => {
//     const {data} = useSuspenseQuery(questionDateQueryOptions({'date':''}))
//     usePrefetchQuery(questionDateQueryOptions({date:''}))
//     useQuery(questionDateQueryOptions({date:''}))
//   }

//   const Hi2 = wrap.Suspense({fallback:<div>loading</div>}).on(() => {
//     const {data} = useSuspenseQuery(questionDateQueryOptions({'date':''}))
//     data.success.question
//     return <div></div>
//   })

//   const Hi3 = () => {
//     const {data} = useSuspenseQuery(questionDateQueryOptions({'date':''}))

//     data?.success.question
//     return
//   }

// const postQuestionsAnswer = async (param: { question_id: string }) => {
//   return http.post(`/${param.question_id}/answer`);
// };

// const getQuestionsViewUser = async (param: { user_id: string }) => {
//   return http.get(`/questions/view/user/${param.user_id}`);
// };

// const getQuestionsViewUserDate = async (param: {
//   user_id: string;
//   date: string;
// }) => {
//   const { user_id, date } = param;
//   return http.get(`/questions/view/user/${user_id}/date/${date}`);
// };

// const postQuestions = async () => {
//   return http.post(`/questions`);
// };
