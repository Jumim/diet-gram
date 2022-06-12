import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: 'Components/atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { register } = useForm();

  return <Input {...args} register={register} />
};

export const Default = Template.bind({});
Default.args = {
  name: 'test',
  type: 'text',
  placeholder: '텍스트를 입력해주세요.'
};
