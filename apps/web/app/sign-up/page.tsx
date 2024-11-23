"use client";

import { PropsWithChildren, useState } from "react";
import { useFunnel } from "~/src/shared/hooks/use-funnel";
import { IdAndPasswordStep } from "./_components/IdAndPasswordStep";
import { NickNameStep } from "./_components/NicknameAndColorStep";
import { Stack } from "~/src/shared/ui/Stack";

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
        <PaddingLayout>
          <IdAndPasswordStep onNext={() => onNext("nickname")} id={state.id} password={state.password} />
        </PaddingLayout>
      </Funnel.Step>
      <Funnel.Step name={"nickname"}>
        <PaddingLayout>
          <NickNameStep onNext={() => {}} />
        </PaddingLayout>
      </Funnel.Step>
    </Funnel>
  );
}

const PaddingLayout = (props: PropsWithChildren) => {
  return <Stack className=" px-[16px]">{props.children}</Stack>;
};
