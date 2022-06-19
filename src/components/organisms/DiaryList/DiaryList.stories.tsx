import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DiaryList } from "./DiaryList";

export default {
  title: 'Components/organisms/DiaryList',
  component: DiaryList,
} as ComponentMeta<typeof DiaryList>;

const Template: ComponentStory<typeof DiaryList> = (args) => {
  return (
    <MemoryRouter>
      <DiaryList {...args} />
    </MemoryRouter>
  )
};

export const Default = Template.bind({});
Default.args = {
  diary: {
    breakfast: {
      date: '2022-06-01',
      sort: 'breakfast',
      sortText: '아침',
      food: [{DESC_KOR: '아이콘1'}, {DESC_KOR: '아이콘2'}],
      totalCal: 60,
      totalCarbs: 60,
      totalProtain: 60,
      totalFat: 60
    },
    lunch: {
      date: '2022-06-01',
      sort: 'lunch',
      sortText: '점심',
      food: [{DESC_KOR: '아이콘1'}, {DESC_KOR: '아이콘2'}],
      totalCal: 60,
      totalCarbs: 60,
      totalProtain: 60,
      totalFat: 60
    },
    dinner: {
      date: '2022-06-01',
      sort: 'dinner',
      sortText: '저녁',
      food: [{DESC_KOR: '아이콘1'}, {DESC_KOR: '아이콘2'}],
      totalCal: 60,
      totalCarbs: 60,
      totalProtain: 60,
      totalFat: 60
    },
    snack: {
      date: '2022-06-01',
      sort: 'snack',
      sortText: '간식',
      food: [{DESC_KOR: '아이콘1'}, {DESC_KOR: '아이콘2'}],
      totalCal: 60,
      totalCarbs: 60,
      totalProtain: 60,
      totalFat: 60
    },
  },
  navi: () => {},
  deleteDiaryItem: () => {}
};
