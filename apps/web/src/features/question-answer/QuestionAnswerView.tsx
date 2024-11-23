import Image from "next/image";
import { Text } from "~/src/shared/ui/text";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type Props = {
  backgroundImageUrl: string;
  questionAuthorName: string;
  questionContent: string;
  userName: string;
  answerContent: string;
};

export const QuestionAnswerView = (props: Props) => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src={"/backgrounds/question-form.webp"}
        className="absolute inset-0 object-cover w-full h-full z-0"
        fill
        alt="background"
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col px-[16px] py-[40px]">
        <div className="flex flex-row mb-[18px]">
          <button onClick={() => router.back()} className="w-[25px] h-[25px] flex justify-center items-center">
            <ChevronLeftIcon className="text-black w-[20px] h-[20px]" />
          </button>
          <Text variant={"display01"}>12월 2일</Text>
        </div>

        {/* 질문 이미지 */}
        <div className="w-[242px] h-[276px] bg-white rounded-small shadow-md overflow-hidden flex self-center mb-6">
          <Image
            src="/icons/complete.webp"
            alt="answer-thumbnail"
            className="object-cover w-full h-full rounded-small"
            width={210}
            height={210}
          />
        </div>

        {/* 질문 작성자 및 질문 내용 */}
        <div className="text-left self-start max-w-[320px] mb-4">
          <Text variant="subhead03">From. {props.questionAuthorName}</Text>
          <div className="p-2 mt-1 border-none rounded-small bg-white">
            <Text variant="body02" className="whitespace-pre-wrap">
              {props.questionContent}
            </Text>
          </div>
        </div>

        {/* 답변 */}
        <div className="text-right self-end max-w-[320px] mt-4">
          <Text variant="subhead03">Re. {props.userName}</Text>
          <div className="p-2 mt-1 border-none rounded-small bg-white ">
            <Text variant="body02" className="whitespace-pre-wrap">
              {props.answerContent}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
