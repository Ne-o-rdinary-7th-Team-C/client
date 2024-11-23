"use client";

import { userQueryQuestions } from "~/src/api/remotes";
import { AdventCalendarButton } from "~/src/features/advent-calendar/Button";
import { socialDrawer } from "~/src/features/social-share/Drawer";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Stack } from "~/src/shared/ui/Stack";
import { Text } from "~/src/shared/ui/text";
import { SuspenseQuery } from "@suspensive/react-query";
import { ErrorBoundary, Suspense } from "@suspensive/react";
import { CALENDARS } from "~/src/features/advent-calendar/constants";
import { Fragment, useState } from "react";
import { SignedIn, useAuthState } from "~/src/shared/auth";

export default function Page() {
  const [selected, setSelected] = useState(0);
  const auth = useAuthState();

  return (
    <SignedIn>
      <Stack className=" px-[26px] py-6 bg-[#6D0000]  min-h-screen">
        <ErrorBoundary fallback={null}>
          <Suspense>
            <Text className=" text-gray-50  whitespace-pre-wrap text-[32px] font-bold">{`CMC Team C's \nAdvent calendar`}</Text>
          </Suspense>
        </ErrorBoundary>
        <div className=" h-[40px]" />
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense>
            <Stack className=" grid grid-cols-3 gap-[16px]">
              <SuspenseQuery {...userQueryQuestions()}>
                {({ data: calendars }) => {
                  return (
                    <Fragment>
                      {CALENDARS.map((day) => (
                        <AdventCalendarButton key={day} selected={selected === day} onClick={() => setSelected(day)}>
                          {day}
                        </AdventCalendarButton>
                      ))}
                    </Fragment>
                  );
                }}
              </SuspenseQuery>
            </Stack>
          </Suspense>
        </ErrorBoundary>
        <FixedBottom className=" pb-[48px] px-[16px]">
          <Button
            size={"lg"}
            variant={"primary"}
            onClick={() => {
              socialDrawer.open({ link: `https://cmcteamc.vercel.app/calendar-view/${auth.user_id}` });
            }}
          >
            내 캘린더 공유하기
          </Button>
        </FixedBottom>
      </Stack>
    </SignedIn>
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
