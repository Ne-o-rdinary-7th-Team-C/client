import { Meta, StoryObj } from "@storybook/react";
import { QuestionTransition } from "./question-transition";

export default {
  title: "service/question-transition",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return <QuestionTransition username="홍길동" />;
  },
};
