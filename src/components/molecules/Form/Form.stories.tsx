import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form } from "./Form";

export default {
  title: 'Components/molecules/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
  children: 'Form'
};
