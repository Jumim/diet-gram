import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FoodList } from "./FoodList";

export default {
  title: 'Components/molecules/FoodList',
  component: FoodList,
} as ComponentMeta<typeof FoodList>;

const Template: ComponentStory<typeof FoodList> = (args) => <FoodList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      NUTR_CONT8: "6",
      NUTR_CONT9: "0.2",
      NUTR_CONT4: "25.8",
      NUTR_CONT5: "21.2",
      NUTR_CONT6: "1535.83",
      NUM: "1",
      NUTR_CONT7: "193.4",
      NUTR_CONT1: "595.61",
      NUTR_CONT2: "44.9",
      SUB_REF_NAME: "식약처('16) 제4권",
      NUTR_CONT3: "45.9",
      RESEARCH_YEAR: "2019",
      MAKER_NAME: "",
      GROUP_NAME: "",
      SERVING_SIZE: "400",
      SAMPLING_REGION_NAME: "전국(대표)",
      SAMPLING_MONTH_CD: "AVG",
      SAMPLING_MONTH_NAME: "평균",
      DESC_KOR: "닭갈비",
      SAMPLING_REGION_CD: "ZZ",
      FOOD_CD: "D000007"
    },
    {
      NUTR_CONT8: "4",
      NUTR_CONT9: "",
      NUTR_CONT4: "",
      NUTR_CONT5: "11",
      NUTR_CONT6: "792",
      NUM: "1",
      NUTR_CONT7: "",
      NUTR_CONT1: "481",
      NUTR_CONT2: "",
      SUB_REF_NAME: "식약처('19)",
      NUTR_CONT3: "24",
      RESEARCH_YEAR: "2019",
      MAKER_NAME: "맘스터치",
      GROUP_NAME: "",
      SERVING_SIZE: "225",
      SAMPLING_REGION_NAME: "전국(대표)",
      SAMPLING_MONTH_CD: "AVG",
      SAMPLING_MONTH_NAME: "평균",
      DESC_KOR: "불싸이버거",
      SAMPLING_REGION_CD: "ZZ",
      FOOD_CD: "D016255"
    }
  ],
  btnText: '삭제',
  onClick: () => {},
  inView: false,
  setInView: () => {}
};
