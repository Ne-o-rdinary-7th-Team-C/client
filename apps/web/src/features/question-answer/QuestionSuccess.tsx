import { Text } from "~/src/shared/ui/text";
import { useRouter } from "next/navigation";
import { Button } from "~/src/shared/ui/button";
import Image from "next/image";
import { toast } from "sonner";

type Props = {
  questionAuthorName: string;
};

export const QuestionSuccess = (props: Props) => {
  const router = useRouter();
  return (
    <div className={"h-[calc(100vh-80px)] py-[40px] px-[16px] text-center flex flex-col justify-center"}>
      <Text variant="display02">질문이 작성됐어요!</Text>
      <Image
        src={"/icons/complete.webp"}
        alt="complete"
        className="w-[160px] mt-[60px] self-center"
        width={160}
        height={160}
      />
      <div className="flex flex-col gap-[12px] mt-auto">
        <Button size="lg" onClick={() => toast.error("기능준비중입니다!")}>
          나만의 어드벤트 캘린더 만들기
        </Button>
        <Button size="lg" variant="outline" onClick={() => router.push("/calendar-view/32")}>
          답변 보러가기
        </Button>
      </div>
    </div>
  );
};
