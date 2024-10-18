import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Dropdown> = {
  title: "ui/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {},
      description: "Dropdown options to be displayed",
    },
    onSelect: {
      action: "selected",
      description:
        "Callback function to be executed when an option is selected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    onSelect: action("Option selected"),
  },
};
