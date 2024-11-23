import { Meta, StoryObj } from "@storybook/react";
import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { QuestionForm } from "./QuestionForm";

export default {
  title: "Service/question-form",
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <QuestionForm />
      </GlobalLayout>
    );
  },
};
