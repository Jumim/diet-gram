import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotFound } from "./NotFound";

export default {
  title: 'Components/organisms/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => {
  return (
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  )
}

export const Default = Template.bind({});
