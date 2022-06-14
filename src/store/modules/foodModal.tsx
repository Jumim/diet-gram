// 타입 선언
type foodModalAction = ReturnType<typeof setFoodModal>;

// 액션 타입 지정
const SET_FOODMODAL = 'FOODMODAL/SET_FOODMODAL';

// 액션 생성 함수 지정
export const setFoodModal = (state: boolean): {type: string; state: boolean} => ({
  type: SET_FOODMODAL,
  state: state
});

const initState = false;

// 리듀서
const foodModal = (state: boolean = initState, action: foodModalAction): boolean => {
  switch (action.type) {
    case SET_FOODMODAL:
      return action.state;
    default:
      return state;
  }
}

export default foodModal;
