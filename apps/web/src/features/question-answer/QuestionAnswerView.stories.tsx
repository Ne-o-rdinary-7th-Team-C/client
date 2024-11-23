import { Meta, StoryObj } from "@storybook/react";
import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { QuestionAnswerView } from "./QuestionAnswerView";

export default {
  title: "Service/question-answer-view",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <QuestionAnswerView
          backgroundImageUrl="dsa"
          questionAuthorName="홍길동"
          questionContent="오늘 하루 어땠나요?"
          userName="김철수"
          answerContent="오늘 하루 좋았어요"
        />
      </GlobalLayout>
    );
  },
};
