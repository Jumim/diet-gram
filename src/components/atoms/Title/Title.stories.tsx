import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: 'Components/atoms/Modal',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title'
};
