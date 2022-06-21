import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loading } from "./Loading";

export default {
  title: 'Components/atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
