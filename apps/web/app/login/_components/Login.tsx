"use client";
import { useDraft } from "@xionwcfm/react";
import { Input } from "~/src/shared/ui/input";
import { Button } from "~/src/shared/ui/button";
type Props = {
  onNext: (value: { id: string; password: string }) => void;
  id: string;
  password: string;
};
export const Login = () => {
  const [id, setId] = useDraft("");
  const [password, setPassword] = useDraft("");

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-80px)]">
      <div>
        <p className={"font-bold text-[24px] leading-[34px] my-[20px]"}>로그인</p>
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
      <div className="mt-auto">
        <Button size="lg">로그인</Button>
      </div>
    </div>
  );
};