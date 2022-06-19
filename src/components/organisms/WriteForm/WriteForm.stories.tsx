import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WriteForm } from "./WriteForm";

export default {
  title: 'Components/organisms/WriteForm',
  component: WriteForm,
} as ComponentMeta<typeof WriteForm>;

const Template: ComponentStory<typeof WriteForm> = (args) => {
  const { register } = useForm();

  return (
    <WriteForm {...args} register={register} />
  )
}

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
  date: '2022-06-01',
  foodList: [],
  sortValue: '아침',
  handleRemoveFoodList: () => {},
  handleFoodModal: () => {}
};
