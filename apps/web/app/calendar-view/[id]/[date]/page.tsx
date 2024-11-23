"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { usePostQuestions, userQueryOptions } from "~/src/api/remotes";
import { QuestionForm } from "~/src/features/question-answer/QuestionForm";
import { SignedIn } from "~/src/shared/auth";

export default function Page() {
  return <RPage />;
}

const RPage = () => {
  const router = useRouter();
  const params = useParams<{ id: string; date: string }>();
  // id가지고 api 찔러서 데닉네임얻어고
  // date 가지고 12월 3일 같은 포맷만들기
  // 제출하면 일어날일을 정의하기

  return (
    <div>
      <QuestionForm
        username={"핸"}
        onNext={({ nickname, answer }) => {
          router.push("/donequestions");
        }}
        date={params.date}
      />
    </div>
  );
};
