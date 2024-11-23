import { GlobalLayout } from "~/src/shared/ui/GlobalLayout";
import { AdventCalendarButton } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Service/advent-calendar-Button",
} as Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <GlobalLayout>
        <div className=" grid grid-cols-3 gap-4 px-4">
          <AdventCalendarButton>1</AdventCalendarButton>
          <AdventCalendarButton>2</AdventCalendarButton>
          <AdventCalendarButton>3</AdventCalendarButton>
          <AdventCalendarButton selected>4</AdventCalendarButton>
          <AdventCalendarButton disabled>5</AdventCalendarButton>
          <AdventCalendarButton>6</AdventCalendarButton>
        </div>
      </GlobalLayout>
    );
  },
};
