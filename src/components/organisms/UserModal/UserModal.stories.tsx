import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserModal } from "./UserModal";

export default {
  title: 'Components/organisms/UserModal',
  component: UserModal,
} as ComponentMeta<typeof UserModal>;

const Template: ComponentStory<typeof UserModal> = (args) => {
  const { register } = useForm();

  return (
    <UserModal {...args} register={register} />
  )
}

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
  errors: [],
  activityLevelList: [
    { name: '매우 활동적', value: '4' },
    { name: '활동적', value: '3' },
    { name: '비교적 활동적', value: '2' },
    { name: '거의 활동하지 않음', value: '1' }
  ],
};
