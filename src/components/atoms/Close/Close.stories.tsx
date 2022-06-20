import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Close } from "./Close";

export default {
  title: 'Components/atoms/Close',
  component: Close,
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = () => <Close />;

export const Default = Template.bind({});
