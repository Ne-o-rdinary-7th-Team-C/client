import { Meta, StoryObj } from "@storybook/react";
import { SocialDrawer } from "./Drawer";
import { useState } from "react";

const meta: Meta = {
  title: "Service/SocialDrawer",
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>클릭</button>
        <SocialDrawer link="hello" isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};
