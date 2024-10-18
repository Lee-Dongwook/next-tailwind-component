import type { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "Section 1",
    content: "This is the content of section 1",
  },
};

export const OpenAccordion: Story = {
  args: {
    title: "Open Section",
    content: "This is the content of an open section",
  },
  play: ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");
    if (button) {
      button.click();
    }
  },
};
