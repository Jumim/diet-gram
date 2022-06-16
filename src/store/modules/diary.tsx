import { getDiaryData, setDiaryData, deleteDiaryData } from 'config/diary';
import { DiaryItemProps, DiaryDataType } from 'types';

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

      const breakfastData = diary.data.find((data) => data.sort === 'breakfast');
      const lunchData = diary.data.find((data) => data.sort === 'lunch');
      const dinnerData = diary.data.find((data) => data.sort === 'dinner');
      const snackData = diary.data.find((data) => data.sort === 'snack');

      if (diary.state) {
        const newData = {
          breakfast: breakfastData === undefined ? {sort: 'breakfast', sortText: '아침'} : breakfastData,
          lunch: lunchData === undefined ? {sort: 'lunch', sortText: '점심'} : lunchData,
          dinner: dinnerData === undefined ? {sort: 'dinner', sortText: '저녁'} : dinnerData,
          snack: snackData === undefined ? {sort: 'snack', sortText: '간식'} : snackData
        }

        dispatch(initDiaryList(newData));
      } else {
        const newData = {
          breakfast: {sort: 'breakfast', sortText: '아침'},
          lunch: {sort: 'lunch', sortText: '점심'},
          dinner: {sort: 'dinner', sortText: '저녁'},
          snack: {sort: 'snack', sortText: '간식'}
        }

        dispatch(initDiaryList(newData));
      }
    } catch {
      alert('다이어리 정보를 불러오는데 실패했습니다.');
    }
  }
}

export const setDiaryDataThunk = (diaryItem: DiaryItemProps): any => {
  return async (dispatch: any) => {
    try {
      setDiaryData(diaryItem)
        .then(() => {
          dispatch(setDiaryList({[diaryItem.sort]: diaryItem.data}));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      alert('다이어리 정보를 저장하는데 실패했습니다.');
    }
  }
}

export const deleteDiaryDataThunk = (diaryItem: DiaryItemProps): any => {
  return async (dispatch: any) => {
    try {
      deleteDiaryData(diaryItem)
        .then(() => {
          dispatch(removeDiaryList(diaryItem.sort));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      alert('다이어리 정보를 삭제하는데 실패했습니다.');
    }
  }
}

const initState: DiaryDataType = {
  breakfast: {
    sort: 'breakfast',
    sortText: '아침'
  },
  lunch: {
    sort: 'lunch',
    sortText: '점심'
  },
  dinner: {
    sort: 'dinner',
    sortText: '저녁'
  },
  snack: {
    sort: 'snack',
    sortText: '간식'
  },
};

// 리듀서
const diary = (state: DiaryDataType = initState, action: diaryAction): any => {
  switch (action.type) {
    case INIT_DIARYLIST:
      return state = action.diaryItem;
    case SET_DIARYLIST:
      return {
        ...state,
        [action.diaryItem.sort]: action.diaryItem.data
      };
    case REMOVE_DIARYLIST:
    console.log(action.diaryItem);
      return {
        ...state,
        [action.diaryItem]: []
      };
    case EDIT_DIARYLIST:
      return {
        ...state,
        [action.diaryItem.sort]: action.diaryItem.data
      };
    default:
      return state;
  }
}

export default diary;
