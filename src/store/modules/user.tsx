interface userType {
  uid: string
  name: string
  calorie: number
}

// 타입 선언
type userAction = ReturnType<typeof setUser>;

// 액션 타입 지정
const SET_USER = 'USER/SET_USER';

// 액션 생성 함수 지정
export const setUser = (data: any): {type: string; data: userType} => ({
  type: SET_USER,
  data: data
});

const initState: userType = {
  uid: '',
  name: '',
  calorie: 0
};

export const getUserData = () => async (dispatch: any) => {
  try {

  } catch {

  }
}

// 리듀서
const user = (state: userType = initState, action: userAction): userType => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    default:
      return state;
  }
}

export default user;
