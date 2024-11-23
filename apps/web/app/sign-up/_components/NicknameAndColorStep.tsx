import { useDraft } from "@xionwcfm/react";
import { Input } from "~/src/shared/ui/input";
import { Button } from "~/src/shared/ui/button";
type Props = {
  nickname: string;
  color: string;
  onNext: (value: { nickname: string; color: string }) => void;
};
export const NickNameStep = (props: Props) => {
  const { onNext } = props;
  const [nickname, setNickname] = useDraft(props.nickname);
  const [color, setColor] = useDraft(props.color);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <p className={"font-bold text-[24px] leading-[34px] my-[20px]"}>별명</p>
        <Input
          type="text"
          value={nickname}
          placeholder="한영문 상관없이 10글자 이내"
          onChange={(e) => setNickname(e.target.value)}
        />
        <p className={"font-bold text-[24px] leading-[34px] my-[20px] mt-[45px]"}>캘린더 컬러 선택</p>
        <div className="flex gap-5">
          <div className="w-48 aspect-square bg-illustColor1 rounded-medium flex-grow-0" />
          <div className="w-48 aspect-square bg-illustColor2 rounded-medium flex-grow-0" />
          <div className="w-48 aspect-square bg-illustColor3 rounded-medium flex-grow-0" />
          <div className="w-48 aspect-square bg-line rounded-medium flex-grow-0 mr-[36px]" />
        </div>
      </div>
      <div className="mt-auto mb-[48px]">
        <Button size="lg" onClick={() => onNext({ nickname, color })}>
          캘린더 생성하기
        </Button>
      </div>
    </div>
  );
};
