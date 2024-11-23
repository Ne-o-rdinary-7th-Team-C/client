import { http, authHttp } from "~/src/http";
import { createMutation } from "@xionwcfm/react-query";
import { queryOptions } from "@tanstack/react-query";
import { ApiResponse } from "../shared/types/api.type";

const getUser = async () => http.get("/user");

const $queryKeys = {
  user: () => ["user"],
  questions: () => ["questions"],
  questionsByDate: (date: string) => ["questions", date],
};

export const userQueryOptions = () =>
  queryOptions({ queryKey: $queryKeys.user(), queryFn: getUser });

type PostUserLoginRequest = {
  login_id: string;
  password: string;
};

type PostUserLoginResponse = ApiResponse<{
  access_token: string;
  refresh_token: string;
}>;

const postUserLogin = async (
  body: PostUserLoginRequest
): Promise<PostUserLoginResponse> => {
  return http.post<PostUserLoginRequest, PostUserLoginResponse>(
    "/user/login",
    body
  );
};

// get 요청이 아닌 것은 모두 mutation으로 만듭니다.
export const useUserLogin = createMutation({ mutationFn: postUserLogin });

const postUserValidation = async () => {
  return http.post("/user/validation");
};

const postUserRegister = async () => {
  return http.post("/user/register");
};

const patchUserRegister = async () => {
  return http.patch("/user/register");
};

const getQuestions = async () => {
  return http.get("/questions");
};

type GetQuestionsDateRequest = {
  date: string;
};

type GetQuestionsDateResponse = ApiResponse<{
  question_id: string;
  question: string;
}>;

const getQuestionsDate = async (param: GetQuestionsDateRequest) => {
  return http.get<GetQuestionsDateResponse>(`/questions/${param.date}`);
};

// get 요청인데 파람을 받아야하는 경우 이렇게 작성합니다
export const questionDateQueryOptions = (param: GetQuestionsDateRequest) =>
  queryOptions({
    queryKey: $queryKeys.questionsByDate(param.date),
    queryFn: async () => getQuestionsDate(param),
  });

const postQuestionsAnswer = async (param: { question_id: string }) => {
  return http.post(`/${param.question_id}/answer`);
};

const getQuestionsViewUser = async (param: { user_id: string }) => {
  return http.get(`/questions/view/user/${param.user_id}`);
};

const getQuestionsViewUserDate = async (param: {
  user_id: string;
  date: string;
}) => {
  const { user_id, date } = param;
  return http.get(`/questions/view/user/${user_id}/date/${date}`);
};

const postQuestions = async () => {
  return http.post(`/questions`);
};
