import Image from "next/image";
import { Button } from "~/src/shared/ui/button";
import { FixedBottom } from "~/src/shared/ui/FixedBottom";
import { Text } from "~/src/shared/ui/text";
type Props = {
  onSecondaryClick?: () => void;
  onPrimaryClick?: (answer: string) => void;
  targetDate: string;
  questionAuthorName: string;
  question: string;
};

export const QuestionAnswer = (props: Props) => {
  return (
    <div className="relative w-full h-screen bg-gray-100 px-[16px] py-[40px] overflow-hidden">
      <Image
        src={"/backgrounds/qna.webp"}
        className="absolute inset-0 object-cover w-full h-full z-0"
        fill
        alt="qna background"
      />

      <div className="relative z-10 flex flex-col h-[calc(100vh-80px)] box-border">
        {/* 상단 콘텐츠 */}
        <div className="flex flex-col flex-grow">
          {/* 상단 날짜 및 질문 */}
          <div className="mt-6">
            <div className="flex flex-row gap-[8px]">
              <div className="w-[25px] flex self-center">◁</div>
              <Text variant="display01">12월 {props.targetDate}</Text>
            </div>
            <div className="mt-[24px]">
              <Text variant="subhead03" className="text-primaryColor2">
                {props.questionAuthorName}이 보낸 질문
              </Text>
            </div>

            {/* 질문 텍스트 */}
            <div className="w-full h-[120px] mt-2 p-4 border border-[rgba(255,255,255,0.4)] rounded-small bg-[rgba(255,255,255,0.4)] shadow-sm">
              <p className="text-black text-[14px] leading-[20px]">{props.question}</p>
            </div>
          </div>

          {/* 입력 필드 */}
          <div className="mt-6">
            <textarea
              placeholder="답변을 입력해주세요."
              className="p-4 h-[120px] w-full border-[1px] border-white rounded-small bg-[rgba(255,255,255,0.85)]  text-[14px] shadow-sm"
            ></textarea>
          </div>
        </div>

        {/* 하단 버튼 */}
        <FixedBottom className="flex w-full p-[20px] px-[26px] items-center gap-[20px] bg-white justify-between">
          <Button variant="outline" size="md" onClick={props.onSecondaryClick} className="">
            이미지 업로드
          </Button>
          <Button size="md" onClick={() => props.onPrimaryClick?.("답변 내용")} className="">
            답변하기
          </Button>
        </FixedBottom>
      </div>
    </div>
  );
};
