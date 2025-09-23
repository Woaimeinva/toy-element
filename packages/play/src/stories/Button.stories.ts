import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { ErButton, ErButtonGroup } from 'toy-element'

type Story = StoryObj<typeof ErButton> & { argTypes: ArgTypes}

const meta: Meta<typeof ErButton> = {
  title: "Example/Button",
  component: ErButton,
  //subcomponents: { ButtonGroup: ErButtonGroup },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
    useThrottle: true
  },
  render: (args: any) => ({
    components: { ErButton },
    setup() {
      return { args };
    },
    template: container(
      `<er-button v-bind="args">{{args.content}}</er-button>`
    ),
  }),
};

export const ButtonGroup: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    content: "Button Group",
  },
  render: (args: any) => ({
    components: { ErButtonGroup, ErButton },
    setup() {
      return { args };
    },
    template: container(
      `<er-button-group v-bind="args">
        <er-button type="primary">111</er-button>
        <er-button type="danger">2222</er-button>
        <er-button type="danger">3333</er-button>
      </er-button-group>`
    ),
  }),
};

export default meta
