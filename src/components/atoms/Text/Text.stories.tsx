import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: 'Components/atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Small',
  type: 'default',
  size: 'small'
};

export const Reregular = Template.bind({});
Reregular.args = {
  children: 'Reregular',
  type: 'default',
  size: 'regular'
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  type: 'default',
  size: 'large'
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  type: 'error',
  size: 'small'
};
