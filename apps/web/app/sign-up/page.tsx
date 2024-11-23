"use client";

import { useState } from "react";
import { useFunnel } from "~/src/shared/hooks/use-funnel";
import { IdAndPasswordStep } from "./_components/IdAndPasswordStep";
import { NickNameStep } from "./_components/NicknameAndColorStep";

export default function Page() {
  const [Funnel, onNext] = useFunnel(["password", "nickname"] as const);
  const [state, setState] = useState({
    id: "",
    password: "",
    nickname: "",
    color: "",
  });
  return (
    <Funnel>
      <Funnel.Step name={"password"}>
        <IdAndPasswordStep onNext={() => onNext("nickname")} id={state.id} password={state.password} />
      </Funnel.Step>
      <Funnel.Step name={"nickname"}>
        <NickNameStep onNext={() => {}} nickname={state.nickname} color={state.color} />
      </Funnel.Step>
    </Funnel>
  );
}
