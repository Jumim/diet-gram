interface authType {
  authenticated: boolean
  loading: boolean
}

// 타입 선언
type authAction = ReturnType<typeof setAuth>;

// 액션 타입 지정
const SET_AUTH = 'AUTH/SET_AUTH';

// 액션 생성 함수 지정
export const setAuth = (result: boolean): {type: string; result: boolean} => ({
  type: SET_AUTH,
  result: result
});

const initState: authType = {
  authenticated: false,
  loading: true
};

// 리듀서
const auth = (state: authType = initState, action: authAction): authType => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authenticated: action.result
      };
    default:
      return state;
  }
}

export default auth;
