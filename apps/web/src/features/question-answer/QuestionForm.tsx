import { Input } from "~/src/shared/ui/input";
import { Text } from "~/src/shared/ui/text";
import Image from "next/image";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";

type Props = {
  username: string;
  onNext?: () => void;
  date: string;
};

export const QuestionForm = (props: Props) => {
  return (
    <div className="relative w-full h-screen ">
      <Image src={"/backgrounds/question-form.webp"} fill alt="qna" />
      <div className="relative px-[16px] mb-[20px] mt-[3px]">
        <Text variant={"display01"}>12월 3일</Text>
      </div>
      <div
        className="relative
        w-full
          px-[16px]
          "
      >
        <Input placeholder="별명을 적어주세요" className="mb-[20px]" />

        <Text variant={"subhead03"} className="text-white">
          {}님께 어떤 질문을 하고 싶나요?
        </Text>
        <Input
          placeholder="최소 10자 이상 입력해주세요."
          className="h-[120px] bg-[rgba(254,255,254,0.4)]  border-[rgba(254,255,254,0.4)] "
        />
      </div>
      <FixedBottom>
        <div className={"p-[20px] bg-white"}>
          <Button variant={"primary"} size={"lg"}>
            질문하기
          </Button>
        </div>
      </FixedBottom>
    </div>
  );
};
