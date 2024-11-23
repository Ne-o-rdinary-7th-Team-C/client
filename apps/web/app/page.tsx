"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { $Routes } from "~/src/routes";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";

export default function First() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      toast.success("gd");
    }, 3000);
  }, []);
  return (
    <div className={"h-screen py-[40px] px-[16px] flex-1"}>
      <div className={"text-center font-bold text-[28px] leading-[38px] my-[20px]"}>
        <div>나만의 어드벤트</div>
        <div>캘린더 만들기</div>
      </div>
      <div className={"mx-auto bg-gray-500 h-[153px] w-[153px]  mt-[8px] mb-[52px] rounded-medium"}></div>
      <FixedBottom className={"pb-[48px] px-[16px]"}>
        <Button variant="primary" size="lg" onClick={() => router.push($Routes.signUp())}>
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
