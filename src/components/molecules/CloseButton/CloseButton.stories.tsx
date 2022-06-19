import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CloseButton } from "./CloseButton";

export default {
  title: 'Components/molecules/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
