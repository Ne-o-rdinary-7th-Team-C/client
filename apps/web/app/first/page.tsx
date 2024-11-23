"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  userQueryOptions,
  useUserRegister,
  useUserLogin,
  useUserValidation,
  usePatchUserRegister,
  userQueryQuestions,
  questionDateQueryOptions,
} from "~/src/api/remotes";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Text } from "~/src/shared/ui/text";
import Image from "next/image";

export default function First() {
  return (
    <div className={"h-screen py-[40px] px-[16px]"}>
      <div className={"my-[30px] text-center"}>
        <Text variant="display02" className="text-primaryColor2">
          나만의 어드벤트
          <br /> 캘린더 만들기
        </Text>
      </div>
      <div className="flex justify-center">
        <Image src={"/first.webp"} alt="start" width={245} height={180} />
      </div>
      <FixedBottom className={"pb-[48px] px-[16px]"}>
        <Button variant="primary" size="lg">
          시작하기
        </Button>
        <div className={"mt-[12px] flex flex-wrap gap-x-1 justify-center"}>
          <span className={"text-gray-400"}>이미 계정이 있나요?</span>
          <span className={"text-primaryColor1"}>로그인</span>
        </div>
      </FixedBottom>
    </div>
  );
}
