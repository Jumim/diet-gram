import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyResponsivePie } from "./MyResponsivePie";

export default {
  title: 'Components/molecules/MyResponsivePie',
  component: MyResponsivePie,
} as ComponentMeta<typeof MyResponsivePie>;

const Template: ComponentStory<typeof MyResponsivePie> = (args) => <MyResponsivePie {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {id: 'label1', label: 'label1', value: 40},
    {id: 'label2', label: 'label2', value: 10},
    {id: 'label3', label: 'label3', value: 50}
  ]
};
