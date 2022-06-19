import { AuthType } from 'types';

// 타입 선언
type authAction = ReturnType<typeof setAuth>;

// 액션 타입 지정
const SET_AUTH = 'AUTH/SET_AUTH';

// 액션 생성 함수 지정
export const setAuth = (result: AuthType): {type: string; payload: AuthType} => ({
  type: SET_AUTH,
  payload: result
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
    default:
      return state;
  }
}

export default auth;
