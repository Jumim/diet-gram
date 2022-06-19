import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconList } from "./IconList";

export default {
  title: 'Components/molecules/IconList',
  component: IconList,
} as ComponentMeta<typeof IconList>;

const Template: ComponentStory<typeof IconList> = (args) => <IconList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {DESC_KOR: '아이콘1'},
    {DESC_KOR: '아이콘2'},
    {DESC_KOR: '아이콘3'}
  ]
};
