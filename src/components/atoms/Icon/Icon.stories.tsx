import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  text: '아이콘'
};

export const Breakfast = Template.bind({});
Breakfast.args = {
  type: 'breakfast',
  text: '아이콘'
};

export const Lunch = Template.bind({});
Lunch.args = {
  type: 'lunch',
  text: '아이콘'
};

export const Dinner = Template.bind({});
Dinner.args = {
  type: 'dinner',
  text: '아이콘'
};

export const Snack = Template.bind({});
Snack.args = {
  type: 'snack',
  text: '아이콘'
};
