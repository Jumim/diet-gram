interface authType {
  authenticated: boolean
  loading: boolean
}

// 타입 선언
type userAction = ReturnType<typeof setUser>;

// 액션 타입 지정
const SET_USER = 'USER/SET_USER';

// 액션 생성 함수 지정
export const setUser = (result: boolean): {type: string; result: boolean} => ({
  type: SET_USER,
  result: result
});

const initState: authType = {
  authenticated: false,
  loading: true
};

// 리듀서
const date = (state: authType = initState, action: userAction): authType => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: action.result
      };
    default:
      return state;
  }
}

export default date;
