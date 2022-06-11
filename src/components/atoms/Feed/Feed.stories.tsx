import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Feed } from "./Feed";

export default {
  title: 'Components/atoms/Feed',
  component: Feed,
} as ComponentMeta<typeof Feed>;

const Template: ComponentStory<typeof Feed> = (args) => <Feed {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  children: ''
};
