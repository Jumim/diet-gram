import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: 'Components/atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return (
    <MemoryRouter>
      <Link {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({});
Default.args = {
  to: '/',
  type: 'none',
  children: 'Link'
};

export const Line = Template.bind({});
Line.args = {
  to: '/',
  type: 'line',
  children: 'Link'
};
