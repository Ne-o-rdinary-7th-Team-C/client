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
import { SuspenseQuery } from "@suspensive/react-query";
import { ErrorBoundary, Suspense } from "@suspensive/react";

export default function Page() {
  return (
    <Stack className=" px-[26px] py-6 bg-[#DC2244] h-screen">
      <ErrorBoundary fallback={null}>
        <Suspense>
          <Text className=" text-gray-50  whitespace-pre-wrap text-[32px] font-bold">{`CMC Team C's \nAdvent calendar`}</Text>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense>
          <Stack className=" grid grid-cols-3 gap-20">
            <SuspenseQuery {...userQueryQuestions()}>
              {({ data: calendars }) =>
                calendars?.success.map((calendar) => (
                  <AdventCalendarButton key={calendar.question_id}>{calendar.assigned_date}</AdventCalendarButton>
                ))
              }
            </SuspenseQuery>
          </Stack>
        </Suspense>
      </ErrorBoundary>
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

const ErrorFallback = () => {
  return (
    <Stack className="  h-[50vh]">
      <Stack className=" gap-y-2 items-center">
        <Text variant={"body-long-02"} className=" text-gray-50 ">
          죄송해요
        </Text>
        <Text variant={"body-long-02"} className=" text-gray-50">
          오류가 발생했어요
        </Text>
      </Stack>
    </Stack>
  );
};
