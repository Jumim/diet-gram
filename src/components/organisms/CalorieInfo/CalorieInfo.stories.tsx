import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CalorieInfo } from "./CalorieInfo";

export default {
  title: 'Components/organisms/CalorieInfo',
  component: CalorieInfo,
} as ComponentMeta<typeof CalorieInfo>;

const Template: ComponentStory<typeof CalorieInfo> = (args) => <CalorieInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: {
    name: '이름',
    calorie: 1200
  },
  totalInfo: [
    1200,
    [
      {id: '탄수화물(g)', label: '탄수화물(g)', value: 40},
      {id: '단백질(g)', label: '단백질(g)', value: 10},
      {id: '지방(g)', label: '지방(g)', value: 50}
    ]
  ],
  isLoading: true
};
