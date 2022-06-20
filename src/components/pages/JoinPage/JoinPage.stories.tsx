import { Provider } from 'react-redux';
import { store } from 'store';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JoinPage } from "./JoinPage";

export default {
  title: 'Components/page/JoinPage',
  component: JoinPage,
} as ComponentMeta<typeof JoinPage>;

const Template: ComponentStory<typeof JoinPage> = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <JoinPage />
      </MemoryRouter>
    </Provider>
  )
};

export const Default = Template.bind({});
