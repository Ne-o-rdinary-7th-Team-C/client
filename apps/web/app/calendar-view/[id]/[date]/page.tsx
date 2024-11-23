"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { usePostQuestions, userQueryOptions } from "~/src/api/remotes";
import { QuestionForm } from "~/src/features/question-answer/QuestionForm";

export default function Page() {
  const router = useRouter();
  const params = useParams<{ id: string; date: string }>();
  // id가지고 api 찔러서 데닉네임얻어고
  // date 가지고 12월 3일 같은 포맷만들기
  // 제출하면 일어날일을 정의하기
  const { data } = useSuspenseQuery(userQueryOptions({ id: Number.parseInt(params.id) }));
  const mutation = usePostQuestions();
  const username = data.success.nickname ?? "";

  return (
    <div>
      {params.id}
      {params.date}
      <QuestionForm
        username={username}
        onNext={({ nickname, answer }) => {
          // mutation.mutate({ nickname, answer, id: params.id, date: params.date });
          router.push("/");
        }}
        date={params.id}
      />
    </div>
  );
}
