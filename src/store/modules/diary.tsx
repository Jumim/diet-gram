import { getDiaryData, setDiaryData, deleteDiaryData, getDiaryList } from 'config/diary';
import { DiaryItemProps, DiaryListType, DiaryDataType } from 'types';

// 타입 선언
// ReturnType <typeof > 는 특정 함수의 타입을 추론함.
type diaryAction = ReturnType<typeof setDiaryList>
  | ReturnType<typeof removeDiaryList>
  | ReturnType<typeof editDiaryList>
  | ReturnType<typeof initDiaryList>;

// 액션 타입 지정
const SET_DIARYLIST = 'DIARY/SET_DIARY' as const;
const INIT_DIARYLIST = 'DIARY/INIT_DIARYLIST' as const;
const REMOVE_DIARYLIST = 'DIARY/REMOVE_DIARYLIST' as const;
const EDIT_DIARYLIST = 'DIARY/EDIT_DIARYLIST' as const;

// 액션 생성 함수 지정
export const setDiaryList = (diaryItem: any) => ({
  type: SET_DIARYLIST,
  diaryItem: diaryItem
});

export const initDiaryList = (diaryItem: any) => ({
  type: INIT_DIARYLIST,
  diaryItem: diaryItem
});

export const removeDiaryList = (diaryItem: any) => ({
  type: REMOVE_DIARYLIST,
  diaryItem: diaryItem
});

export const editDiaryList = (diaryItem: any) => ({
  type: EDIT_DIARYLIST,
  diaryItem: diaryItem
});

export const getDiaryDataThunk = (diaryItem: any): any => {
  return async (dispatch: any) => {
    try {
      const diary = await getDiaryData(diaryItem);

      if (diary.state) {
        const newData = {
          breakfast: diary.data.find((data) => data.sort === '아침'),
          lunch: diary.data.find((data) => data.sort === '점심'),
          dinner: diary.data.find((data) => data.sort === '저녁'),
          snack: diary.data.find((data) => data.sort === '간식'),
          calorieInfo: diary.data.find((data) => data.sort === 'calorieInfo')
        }

        dispatch(initDiaryList(newData));
      } else {
        const newData = {
          breakfast: [],
          lunch: [],
          dinner: [],
          snack: [],
          calorieInfo: []
        }

        dispatch(initDiaryList(newData));
      }
    } catch {
      console.log('다이어리 정보 불러오기 실패');
    }
  }
}

export const setDiaryDataThunk = (diaryItem: DiaryItemProps): any => {
  return async (dispatch: any) => {
    try {
      setDiaryData(diaryItem)
        .then(() => {
          dispatch(setDiaryList(diaryItem.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      console.log('다이어리 정보 저장하기 실패');
    }
  }
}

const initState: DiaryDataType[] = [];

// 리듀서
const diary = (state: DiaryDataType[] = initState, action: diaryAction): any => {
  switch (action.type) {
    case INIT_DIARYLIST:
      return state = action.diaryItem;
    case SET_DIARYLIST:
      return [
        ...state,
        action.diaryItem
      ];
    case REMOVE_DIARYLIST:
      return state.filter((data) => data !== action.diaryItem);
    case EDIT_DIARYLIST:
      return state.map((el: any) =>
        (el.sort === action.diaryItem.sort) ?
          { ...action.diaryItem }
          : el
      );
    default:
      return state;
  }
}

export default diary;
