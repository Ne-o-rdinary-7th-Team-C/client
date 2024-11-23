import { useState } from "react";

import { Input } from "~/src/shared/ui/input";
import { Text } from "~/src/shared/ui/text";
import Image from "next/image";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { usePostQuestions } from "~/src/api/remotes";
import { useInputState } from "@xionwcfm/react";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type Props = {
  username: string;
  onNext?: (value: { nickname: string; answer: string }) => void;
  date: string;
};

export const QuestionForm = (props: Props) => {
  const [nickname, onNicknameChange] = useInputState("");
  const [answer, onAnswerChange] = useInputState("");
  const router = useRouter();

  return (
    <div className="relative w-full h-screen ">
      <Image src={"/backgrounds/question-form.webp"} fill alt="qna" />
      <div className=" flex flex-row relative px-[16px] mb-[20px] mt-[3px] items-center">
        <ChevronLeftIcon className={"h-[40px] w-[40px]"} onClick={() => router.back()} />
        <Text variant={"display01"}>{props.date}</Text>
      </div>
      <div
        className="relative
        w-full
          px-[16px]
          "
      >
        <Input placeholder="별명을 적어주세요" className="mb-[20px]" onChange={onNicknameChange} />

        <Text variant={"subhead03"} className="text-white" onChange={onAnswerChange}>
          어떤 질문을 하고 싶나요?
        </Text>
        <Input
          placeholder="최소 10자 이상 입력해주세요."
          className="h-[120px] bg-[rgba(254,255,254,0.4)]  border-[rgba(254,255,254,0.4)] "
        />
      </div>
      <FixedBottom>
        <div className={"shadow-[2px_0_10px_0_rgba(0, 0, 0, 0.)] p-[20px] bg-white"}>
          <Button variant={"primary"} size={"lg"} onClick={() => props?.onNext?.({ nickname, answer })}>
            질문하기
          </Button>
        </div>
      </FixedBottom>
    </div>
  );
};
