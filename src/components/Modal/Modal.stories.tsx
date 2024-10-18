import type { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "ui/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "This is the content inside the modal",
  },
};

export const OpenCloseModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p> This is a dynamic modal content</p>
        </Modal>
      </div>
    );
  },
};
