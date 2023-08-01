import type { Meta, StoryObj } from "@storybook/react";

import Toolbar from ".";

const meta = {
  title: "Toolbar",
  component: Toolbar,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};