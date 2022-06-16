export interface DiaryItemProps {
  uid: string
  date: string
  sort: string
  data?: DiaryListType
}

export interface DiaryDataType {
  breakfast: DiaryListType,
  lunch: DiaryListType,
  dinner: DiaryListType,
  snack: DiaryListType,
  calorieInfo: any
}

export interface DiaryListType {
  date: string
  sort: string
  food: any
  totalCal: number
  totalCarbs: number
  totalProtain: number
  totalFat: number
}

export interface FoodListType {
  NUTR_CONT8: string
  NUTR_CONT9: string
  NUTR_CONT4: string
  NUTR_CONT5: string
  NUTR_CONT6: string
  NUM: string
  NUTR_CONT7: string
  NUTR_CONT1: string
  NUTR_CONT2: string
  SUB_REF_NAME: string
  NUTR_CONT3: string
  RESEARCH_YEAR: string
  MAKER_NAME: string
  GROUP_NAME: string
  SERVING_SIZE: string
  SAMPLING_REGION_NAME: string
  SAMPLING_MONTH_CD: string
  SAMPLING_MONTH_NAME: string
  DESC_KOR: string
  SAMPLING_REGION_CD: string
  FOOD_CD: string
}

export interface UserFormType {
  name: string
  age: number
  height: number
  activityLevel: string
}

export interface UserInfoType {
  name: string
  calorie: number
}

export interface WriteFormType {
  date: string
  sort: string
}
