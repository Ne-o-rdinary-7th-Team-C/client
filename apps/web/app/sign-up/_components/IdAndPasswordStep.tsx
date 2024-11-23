import { useDraft } from "@xionwcfm/react";

type Props = {
  onNext: (value: { id: string; password: string }) => void;
  id: string;
  password: string;
};
export const IdAndPasswordStep = (props: Props) => {
  const { onNext } = props;
  const [id, setId] = useDraft(props.id);
  const [password, setPassword] = useDraft(props.password);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() => {
          onNext({ id, password });
        }}
      ></button>
    </div>
  );
};
