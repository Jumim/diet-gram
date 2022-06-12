// 타입 선언
type dateAction = ReturnType<typeof setDate>;

// 액션 타입 지정
const SET_DATE = 'DATE/SET_DATE';

// 액션 생성 함수 지정
export const setDate = (date: string): {type: string; date: string} => ({
  type: SET_DATE,
  date: date  // 선택한 날짜
});

const initState = `${new Date().getFullYear()}-${('0'+(new Date().getMonth() + 1)).slice(-2)}-${('0'+new Date().getDate()).slice(-2)}`;

// 리듀서
const date = (state: string = initState, action: dateAction): string => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
}

export default date;
