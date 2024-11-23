import { useDraft } from "@xionwcfm/react";

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
    <div>
      <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => onNext({ nickname, color })}></button>
    </div>
  );
};
