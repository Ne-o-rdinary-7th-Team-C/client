import { Meta, StoryObj } from "@storybook/react";
import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { QuestionSuccess } from "./QuestionSuccess";

export default {
  title: "Service/question-success",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <QuestionSuccess questionAuthorName="홍길동" />
      </GlobalLayout>
    );
  },
};
