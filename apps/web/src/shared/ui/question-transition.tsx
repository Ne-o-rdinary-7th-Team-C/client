import Image from "next/image";

type Props = {
  username: string;
  onNext?: () => void;
  imageUrl: string;
};

export const QuestionTransition = (props: Props) => {
  return (
    <div className="relative w-full h-screen ">
      <Image src={"/backgrounds/qna.webp"} className="object-contain" fill alt="qna" />
      <div
        className="
          flex 
          p-2 
          justify-center 
          items-center 
          text-center
          gap-2 
          rounded-small
          border-[0.5px] 
          border-[rgba(254,255,254,0.4)] 
          bg-[rgba(254,255,254,0.4)] 
          backdrop-blur-sm
          absolute
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2
        "
      >
        <p className="font-bold text-[28px] leading-[38px] text-primaryColor2 whitespace-nowrap">
          {props.username}님이
          <br />
          보낸 질문이 왔어요!
        </p>
      </div>
    </div>
  );
};
