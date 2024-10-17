import type { Meta, StoryObj } from "@storybook/react";
import Drawer from ".";

const meta: Meta<typeof Drawer> = {
  title: "ui/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {};
