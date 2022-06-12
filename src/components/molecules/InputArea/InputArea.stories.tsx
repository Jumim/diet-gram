import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputArea } from "./InputArea";

export default {
  title: 'Components/molecules/InputArea',
  component: InputArea,
} as ComponentMeta<typeof InputArea>;

const Template: ComponentStory<typeof InputArea> = (args) => <InputArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '테스트',
  name: 'test',
  type: 'text',
  placeholder: '텍스트를 입력해주세요.',
  error: '유효성 검사 에러 표시'
};
