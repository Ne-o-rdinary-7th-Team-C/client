"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { questionDateQueryOptions, userQueryQuestions } from "~/src/api/remotes";
import { AdventCalendarButton } from "~/src/features/advent-calendar/Button";
import { emptyQuestionDialog } from "~/src/features/empty-question-dialog/empty-question-dialog";
import { socialDrawer } from "~/src/features/social-share/Drawer";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Stack } from "~/src/shared/ui/Stack";
import { Text } from "~/src/shared/ui/text";

export default function Page() {
  const { data: calendars } = useQuery(userQueryQuestions());

  return (
    <Stack className=" px-[26px] py-6 bg-[#DC2244] h-screen">
      <Text className=" text-gray-50  whitespace-pre-wrap text-[32px] font-bold">{`aiaiaiaiai's \nAdvent calendar`}</Text>
      <Stack className=" grid grid-cols-3 gap-20">
        {calendars?.success.map((calendar) => (
          <AdventCalendarButton key={calendar.question_id}>{calendar.assigned_date}</AdventCalendarButton>
        ))}
      </Stack>
      <FixedBottom className=" pb-[48px] px-[16px]">
        <Button
          size={"lg"}
          variant={"primary"}
          onClick={() => {
            socialDrawer.open({ link: "/dsa" });
          }}
        >
          내 캘린더 공유하기
        </Button>
      </FixedBottom>
    </Stack>
  );
}
