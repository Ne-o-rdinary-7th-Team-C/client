import { useMutation } from "@tanstack/react-query";
import { useDraft } from "@xionwcfm/react";
import { useLogin } from "~/src/shared/auth";
import { Input } from "~/src/shared/ui/input";
import { Button } from "~/src/shared/ui/button";
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

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <p className={"font-bold text-[24px] leading-[34px] my-[20px]"}>회원가입</p>
        <p className={"font-medium text-[16px] leading-[16px] my-[12px]  mt-[65px]"}>아이디</p>
        <Input type="text" value={id} placeholder="10자 이내" onChange={(e) => setId(e.target.value)} />
        <p className={"font-medium text-[16px] leading-[16px] my-[12px] mt-[20px]"}>비밀번호</p>
        <Input
          type="text"
          value={password}
          placeholder="8자 이상 16자 이내"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-auto mb-[48px]">
        <Button
          size="lg"
          onClick={() => {
            onNext({ id, password });
          }}
        >
          가입하기
        </Button>
      </div>
    </div>
  );
};

const useRegisterMutation = () => {
  return useMutation({ mutationFn: async () => {} });
};
