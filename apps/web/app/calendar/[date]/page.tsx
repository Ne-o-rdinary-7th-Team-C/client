"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { userQueryOptions } from "~/src/api/remotes";
import { QuestionAnswer } from "~/src/features/question-answer/QuestionAnswer";
import { useAuthState } from "~/src/shared/auth";
import { Stack } from "~/src/shared/ui/Stack";

export default function Page() {
  const auth = useAuthState();
  const router = useRouter();
  const params = useParams<{ date: string }>();

  return (
    <QuestionAnswer
      targetDate={params.date}
      questionAuthorName="test"
      question="hello"
      onSecondaryClick={() => {
        toast.success("준비중인 기능이에요");
      }}
      onPrimaryClick={(answer) => {
        toast.success(answer);
      }}
    />
  );
}
