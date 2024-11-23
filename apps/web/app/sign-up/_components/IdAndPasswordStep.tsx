import { useMutation } from "@tanstack/react-query";
import { useDraft } from "@xionwcfm/react";
import { useLogin } from "~/src/shared/auth";

type Props = {
  onNext: (value: { id: string; password: string }) => void;
  id: string;
  password: string;
};
export const IdAndPasswordStep = (props: Props) => {
  const { onNext } = props;
  const [id, setId] = useDraft(props.id);
  const [password, setPassword] = useDraft(props.password);
  const { mutate } = useRegisterMutation();
  const login = useLogin();

  mutate(undefined, {
    onSuccess: async (data) => {
      login("액세스토큰 받았어요");
    },
  });
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

const useRegisterMutation = () => {
  return useMutation({ mutationFn: async () => {} });
};
