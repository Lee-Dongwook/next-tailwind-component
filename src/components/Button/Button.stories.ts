import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "ui/Button ",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click me !",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Confirm: Story = {
  args: {
    label: "Confirm",
    className: "bg-green-500 text-white",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    className: "bg-red-500 text-white",
  },
};
