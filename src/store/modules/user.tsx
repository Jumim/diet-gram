import { getUserData, setUserData } from 'config/user';
import { setUserModal } from 'store/modules/userModal';

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

export const getUserThunk = (uid: string): any => {
  return async (dispatch: any) => {
    try {
      const user = await getUserData(uid);

      if(user.state) {
        dispatch(setUser(user.data));
      } else {
        dispatch(setUserModal(true));
      }
    } catch {
      console.log('유저 정보 불러오기 실패');
    }
  }
}

export const setUserThunk = (user: userType): any => {
  return async (dispatch: any) => {
    try {
      setUserData(user);
      dispatch(setUser(user));
    } catch {
      console.log('유저 정보 저장하기 실패');
    }
  }
}

const initState: userType = {
  uid: '',
  name: '',
  calorie: 0
};

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
