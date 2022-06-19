import { MemoryRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
  title: 'Components/organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
  const { register } = useForm();

  return (
    <MemoryRouter>
      <LoginForm {...args} register={register} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => { },
  errors: []
};
