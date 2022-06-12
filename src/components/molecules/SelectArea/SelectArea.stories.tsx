import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectArea } from "./SelectArea";

export default {
  title: 'Components/molecules/SelectArea',
  component: SelectArea,
} as ComponentMeta<typeof SelectArea>;

const Template: ComponentStory<typeof SelectArea> = (args) => {
  const { register } = useForm();

  return (
    <SelectArea {...args} register={register} />
  )
};

export const Default = Template.bind({});
Default.args = {
  label: '테스트',
  name: 'test',
  item: [
    { name: '매우 활동적', value: '4' },
    { name: '활동적', value: '3' },
    { name: '비교적 활동적', value: '2' },
    { name: '거의 활동하지 않음', value: '1' }
  ]
};
