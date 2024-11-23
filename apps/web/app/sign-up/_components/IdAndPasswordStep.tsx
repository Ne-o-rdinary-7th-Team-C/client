import { useDraft } from "@xionwcfm/react";
import { useLogin } from "~/src/shared/auth";
import { Input } from "~/src/shared/ui/input";
import { Button } from "~/src/shared/ui/button";
import { useUserRegister } from "~/src/api/remotes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type Props = {
  onNext: () => void;
  id: string;
  password: string;
};
export const IdAndPasswordStep = (props: Props) => {
  const { onNext } = props;
  const [id, setId] = useDraft(props.id);
  const [password, setPassword] = useDraft(props.password);
  const login = useLogin();
  const { mutate } = useUserRegister();
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-80px)] py-[40px] px-[16px]">
      <div>
        <div className="flex flex-row gap-1 items-center">
          <button onClick={() => router.back()} className="w-[25px] h-[25px] flex justify-center">
            <ChevronLeftIcon className="text-black w-[20px] h-[20px] flex self-center" />
          </button>
          <p className={"font-bold text-[24px] leading-[34px] my-[20px]"}>회원가입</p>
        </div>
        <p className={"font-medium text-[16px] leading-[16px] my-[12px]  mt-[65px]"}>아이디</p>
        <Input type="text" value={id} placeholder="10자 이내" onChange={(e) => setId(e.target.value)} />
        <p className={"font-medium text-[16px] leading-[16px] my-[12px] mt-[20px]"}>비밀번호</p>
        <Input
          type="password"
          value={password}
          placeholder="8자 이상 16자 이내"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-auto">
        <Button
          size="lg"
          disabled={id.length < 3 || password.length < 7 || password.length > 16}
          onClick={() => {
            mutate(
              { loginId: id, password },
              {
                onSuccess: (data) => {
                  login(data.success.token, data.success.user_id);
                  onNext();
                },
              },
            );
          }}
        >
          가입하기
        </Button>
      </div>
    </div>
  );
};
