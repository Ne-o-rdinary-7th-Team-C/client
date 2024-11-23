"use client";
import { useState } from "react";
import { Button } from "../../src/shared/ui/button.tsx";

export default function First() {
  return (
    <div className={"h-screen py-[40px] px-[16px]"}>
      <div className={"text-center font-bold text-[28px] leading-[38px]"}>
        <div>나만의 어드벤트</div>
        <div>캘린더 만들기</div>
      </div>
      <div className={"bg-gray-500 h-[153px] w-[153px] mx-[48px] rounded-medium"}></div>
      <Button variant="primary" size="lg">
        시작하기
      </Button>
      <div className={"my-[8px] flex flex-wrap gap-x-1 justify-center"}>
        <span className={"text-gray-400"}>이미 계정이 있나요?</span>
        <span className={"text-primaryColor1"}>로그인</span>
      </div>
    </div>
  );
}
