import { Meta, StoryObj } from "@storybook/react";
import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { QuestionAnswer } from "./QuestionAnswer";

export default {
  title: "Service/question-answer",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <QuestionAnswer targetDate="25일" questionAuthorName="홍길동" question="오늘 하루 어땠나요?" />
      </GlobalLayout>
    );
  },
};
