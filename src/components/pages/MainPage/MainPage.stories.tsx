import { Provider } from 'react-redux';
import { store } from 'store';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainPage } from "./MainPage";

export default {
  title: 'Components/page/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    </Provider>
  )
};

export const Default = Template.bind({});
