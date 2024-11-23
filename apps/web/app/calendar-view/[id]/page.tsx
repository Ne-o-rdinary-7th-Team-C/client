"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { userQueryProfile, userQueryQuestions, userQueryQuestionsViewUser } from "~/src/api/remotes";
import { Stack } from "~/src/shared/ui/Stack";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Button } from "~/src/shared/ui/button";
import { Text } from "~/src/shared/ui/text";
import { CALENDARS } from "~/src/features/advent-calendar/constants";
import { ErrorBoundary, Suspense } from "@suspensive/react";
import { SuspenseQuery } from "@suspensive/react-query";
import { Fragment, useState } from "react";
import { AdventCalendarButton } from "~/src/features/advent-calendar/Button";

export default function Page() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  return (
    <Stack className=" px-[26px] py-6 bg-[#6D0000] min-h-screen">
      <Text className=" text-gray-50  whitespace-pre-wrap text-[32px] font-bold">{`aiaiaiaiai's \nAdvent calendar`}</Text>
      <div className=" h-[40px]" />
      <ErrorBoundary fallback={null}>
        <Suspense>
          <Stack className=" grid grid-cols-3 gap-[16px]">
            <SuspenseQuery {...userQueryQuestions()}>
              {({ data: calendars }) => {
                return (
                  <Fragment>
                    <div>{JSON.stringify(calendars.success)}</div>
                    <div className=" h-40" />
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
            router.push(`/calendar-view/${params.id}/2024-12-${selected.toString().padStart(2, "0")}`);
          }}
        >
          질문 남기기
        </Button>
      </FixedBottom>
    </Stack>
  );
}
