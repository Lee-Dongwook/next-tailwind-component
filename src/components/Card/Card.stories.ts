import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/150",
    title: "Default Card",
    description: "This is a default card with a placeholder image.",
    label: "Click Here",
  },
};
