import { Meta, StoryObj } from "@storybook/react";
import { QuestionTransition } from "./question-transition";
import { GlobalLayout } from "./GlobalLayout";

export default {
  title: "service/question-transition",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <QuestionTransition username="홍길동" imageUrl="qna" />
      </GlobalLayout>
    );
  },
};
