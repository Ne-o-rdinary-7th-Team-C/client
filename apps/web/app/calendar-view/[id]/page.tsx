"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { userQueryProfile, userQueryQuestionsViewUser } from "~/src/api/remotes";
import { Stack } from "~/src/shared/ui/Stack";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Button } from "~/src/shared/ui/button";
import { Text } from "~/src/shared/ui/text";

export default function Page() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const { data: profileData } = useSuspenseQuery(userQueryProfile({ user_id: params.id }));
  const { data: questionsData } = useSuspenseQuery(userQueryQuestionsViewUser({ user_id: params.id }));

  return (
    <Stack className=" px-[26px] py-6 bg-[#DC2244] h-screen">
      <Text className=" text-gray-50  whitespace-pre-wrap text-[32px] font-bold">{`aiaiaiaiai's \nAdvent calendar`}</Text>
      <FixedBottom className=" pb-[48px] px-[16px]">
        <Button size={"lg"} variant={"primary"}>
          질문 남기기
        </Button>
      </FixedBottom>
    </Stack>
  );
}
