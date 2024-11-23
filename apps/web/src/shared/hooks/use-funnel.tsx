"use client";
import React, { Children, isValidElement } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type NonEmptyArray<T> = readonly [T, ...T[]];
export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<React.ReactElement<StepProps<Steps>>>
    | React.ReactElement<StepProps<Steps>>;
}
export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  onEnter?: () => void;
  children: React.ReactNode;
}
export type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  "steps" | "step"
>;

export type StepChildElementProps = {
  // biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
  goNextStep: () => Promise<boolean> | void;
  routerBack: () => void;
};
export const Funnel = <Steps extends NonEmptyArray<string>>({
  step,
  steps,
  children,
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((item) =>
      steps.includes((item.props as Partial<StepProps<Steps>>).name ?? "")
    ) as Array<React.ReactElement<StepProps<Steps>>>;
  const targetStep = validChildren.find((child) => child.props.name === step);
  return <>{targetStep}</>;
};

export const Step = <Steps extends NonEmptyArray<string>>({
  children,
}: StepProps<Steps>) => {
  return <>{children}</>;
};

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  array: Steps,
  option?: {
    initialStep: Steps[number];
  }
) => {
  const [steps] = React.useState<Steps>(array);
  const [currentStep, setCurrentStep] = React.useState<Steps[number]>(array[0]);

  const [nextStepOption, setNextStepOption] = React.useState<
    "push" | "replace"
  >("push");
  const router = useRouter();
  const pathName = usePathname();

  const searchParams = useSearchParams();
  const queryStep = searchParams.get("step");
  const queryFrom = searchParams.get("from");

  const nextStep = (
    nextQuery?: Steps[number],
    config?: { option?: "push" | "replace" }
  ) => {
    if (!queryStep) return;

    const nextStep = nextQuery
      ? nextQuery
      : steps[steps.indexOf(queryStep) + 1];

    if (config?.option === "replace") {
      setNextStepOption("replace");
    }
    setCurrentStep(nextStep);
  };

  React.useEffect(() => {
    if (nextStepOption === "replace") {
      router.replace(
        `${pathName}?step=${currentStep}${queryFrom ? `&from=${queryFrom}` : ""}`
      );
      setNextStepOption("push");
    } else {
      router.push(
        `${pathName}?step=${currentStep}${queryFrom ? `&from=${queryFrom}` : ""}`
      );
    }
  }, [currentStep]);

  React.useEffect(() => {
    const popstate = () => {
      const url = window.location.href;
      const params = new URLSearchParams(new URL(url).search);
      const current = params.get("step");
      if (current !== null && array.includes(current)) {
        setCurrentStep(current);
      }
    };
    window.addEventListener("popstate", popstate);
    return () => window.removeEventListener("popstate", popstate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (option?.hasOwnProperty("initialStep")) {
      const initialPath = `${pathName}?step=${option.initialStep}${queryFrom ? `&from=${queryFrom}` : ""}`;
      setCurrentStep(option.initialStep);
      router.replace(initialPath);
    } else {
      const initialPath = `${pathName}?step=${array[0]}${queryFrom ? `&from=${queryFrom}` : ""}`;
      setCurrentStep(array[0]);
      router.replace(initialPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FunnelComponent = React.useMemo(() => {
    // eslint-disable-next-line react/display-name
    return Object.assign(
      (props: RouteFunnelProps<Steps>) => {
        return <Funnel<Steps> step={currentStep} steps={steps} {...props} />;
      },
      {
        Step: (props: StepProps<Steps>) => {
          return <Step {...props} />;
        },
      }
    );
  }, [currentStep, steps]);
  return [FunnelComponent, nextStep] as const;
};
