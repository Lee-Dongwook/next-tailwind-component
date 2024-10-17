import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "ui/Input ",
  component: Input,
  tags: ["autodocs"],
  args: {
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
