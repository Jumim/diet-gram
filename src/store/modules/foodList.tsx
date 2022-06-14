import {FoodListType} from 'types';

// 타입 선언
type foodListAction = ReturnType<typeof initFoodList>
                    | ReturnType<typeof setFoodList>
                    | ReturnType<typeof removeFoodList>
                    | ReturnType<typeof resetFoodList>;

// 액션 타입 지정
const INIT_FOODLIST = 'FOODLIST/INIT_FOODLIST' as const;
const SET_FOODLIST = 'FOODLIST/SET_FOODLIST' as const;
const REMOVE_FOODLIST = 'FOODLIST/REMOVE_FOODLIST' as const;
const RESET_FOODLIST = 'FOODLIST/RESET_FOODLIST' as const;

// 액션 생성 함수 지정
export const initFoodList = (foodItem: FoodListType[]) => ({
  type: INIT_FOODLIST,
  foodItem: foodItem
});

export const setFoodList = (foodItem: FoodListType) => ({
  type: SET_FOODLIST,
  foodItem: foodItem
});

export const removeFoodList = (num: string) => ({
  type: REMOVE_FOODLIST,
  foodItem: num
});

export const resetFoodList = () => ({
  type: RESET_FOODLIST
});

const initState: FoodListType[] = [];

// 리듀서
const foodList = (state: FoodListType[] = initState, action: foodListAction): FoodListType[] => {
  switch (action.type) {
    case INIT_FOODLIST:
      return state = action.foodItem;
    case SET_FOODLIST:
      return [
        ...state,
        action.foodItem
      ];
    case REMOVE_FOODLIST:
      return state.filter((data: any) => data.NUM !== action.foodItem);
    case RESET_FOODLIST:
      return state = initState;
    default:
      return state;
  }
}

export default foodList;
