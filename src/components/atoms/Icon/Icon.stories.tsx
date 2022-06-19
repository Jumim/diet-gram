import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Default',
  text: '아이콘'
};

export const Breakfast = Template.bind({});
Breakfast.args = {
  type: 'Breakfast',
  text: '아이콘'
};

export const Lunch = Template.bind({});
Lunch.args = {
  type: 'Lunch',
  text: '아이콘'
};

export const Dinner = Template.bind({});
Dinner.args = {
  type: 'Dinner',
  text: '아이콘'
};

export const Snack = Template.bind({});
Snack.args = {
  type: 'Snack',
  text: '아이콘'
};
