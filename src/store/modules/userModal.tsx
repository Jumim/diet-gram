// 타입 선언
type userModalAction = ReturnType<typeof setUserModal>;

// 액션 타입 지정
const SET_USERMODAL = 'USERMODAL/SET_USERMODAL';

// 액션 생성 함수 지정
export const setUserModal = (state: boolean): {type: string; state: boolean} => ({
  type: SET_USERMODAL,
  state: state
});

const initState = false;

// 리듀서
const userModal = (state: boolean = initState, action: userModalAction): boolean => {
  switch (action.type) {
    case SET_USERMODAL:
      return action.state;
    default:
      return state;
  }
}

export default userModal;
