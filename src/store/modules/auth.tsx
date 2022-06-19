import { AuthType } from 'types';

// 타입 선언
type authAction = ReturnType<typeof setAuth>
                | ReturnType<typeof resetAuth>;

// 액션 타입 지정
const SET_AUTH = 'AUTH/SET_AUTH' as const;
const RESET_AUTH = 'AUTH/RESET_AUTH' as const;

// 액션 생성 함수 지정
export const setAuth = (result: AuthType) => ({
  type: SET_AUTH,
  payload: result
});

export const resetAuth = () => ({
  type: RESET_AUTH
});

const initState: AuthType = {
  authenticated: false,
  uid: ''
};

// 리듀서
const auth = (state: AuthType = initState, action: authAction): AuthType => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authenticated: action.payload.authenticated,
        uid: action.payload.uid
      };
    case RESET_AUTH:
      return state = initState;
    default:
      return state;
  }
}

export default auth;
