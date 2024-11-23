"use client";
import { useRouter } from "next/navigation";
import { $Routes } from "~/src/routes";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Text } from "~/src/shared/ui/text";
import Image from "next/image";
export default function First() {
  const router = useRouter();

  return (
    <div className={"h-screen py-[40px] px-[16px] flex-1"}>
      <div className={"text-center font-bold text-[28px] leading-[38px] my-[30px]"}>
        <Text variant="display02" className="text-primaryColor2">
          나만의 어드벤트
          <br /> 캘린더 만들기
        </Text>
      </div>
      <div className="flex justify-center">
        <Image src={"/first.webp"} alt="start" width={245} height={180} />
      </div>
      <FixedBottom className={"pb-[48px] px-[16px]"}>
        <Button variant="primary" size="lg" onClick={() => router.push($Routes.signUp())}>
          시작하기
        </Button>
        <div className={"mt-[12px] flex flex-wrap gap-x-1 justify-center"}>
          <span className={"text-gray-400"}>이미 계정이 있나요?</span>
          <button className={"text-primaryColor1"} onClick={() => router.push($Routes.login())}>
            로그인
          </button>
        </div>
      </FixedBottom>
    </div>
  );
}
