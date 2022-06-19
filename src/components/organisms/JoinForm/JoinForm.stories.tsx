import { MemoryRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JoinForm } from "./JoinForm";

export default {
  title: 'Components/organisms/JoinForm',
  component: JoinForm,
} as ComponentMeta<typeof JoinForm>;

const Template: ComponentStory<typeof JoinForm> = (args) => {
  const { register } = useForm();

  return (
    <MemoryRouter>
      <JoinForm {...args} register={register} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => { },
  errors: []
};
