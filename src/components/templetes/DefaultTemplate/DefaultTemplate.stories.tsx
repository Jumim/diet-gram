import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultTemplate } from "./DefaultTemplate";

export default {
  title: 'Components/templates/DefaultTemplate',
  component: DefaultTemplate,
} as ComponentMeta<typeof DefaultTemplate>;

const Template: ComponentStory<typeof DefaultTemplate> = (args) => <DefaultTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: <></>,
  children: <div></div>
};
