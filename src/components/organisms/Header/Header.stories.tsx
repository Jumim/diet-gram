import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: 'Components/organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '2022.06.01',
};
