import { Provider } from 'react-redux';
import { store } from 'store';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginPage } from "./LoginPage";

export default {
  title: 'Components/page/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  )
};

export const Default = Template.bind({});
