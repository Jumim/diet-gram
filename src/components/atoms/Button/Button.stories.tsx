import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: 'Components/atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  btnType: 'positive',
  type: 'button',
  text: 'Button'
};

export const Negative = Template.bind({});
Negative.args = {
  btnType: 'negative',
  type: 'button',
  text: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  btnType: 'default',
  type: 'button',
  text: 'Button',
};
