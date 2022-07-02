import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

export default {
  title: 'Components/page/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => {
  return (
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  )
};

export const Default = Template.bind({});
