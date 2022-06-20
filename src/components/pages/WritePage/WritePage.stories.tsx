import { Provider } from 'react-redux';
import { store } from 'store';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WritePage } from "./WritePage";

export default {
  title: 'Components/page/WritePage',
  component: WritePage,
} as ComponentMeta<typeof WritePage>;

const Template: ComponentStory<typeof WritePage> = () => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <WritePage />
      </MemoryRouter>
    </Provider>
  )
};

export const Default = Template.bind({});
