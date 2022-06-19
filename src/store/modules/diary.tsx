import { getDiaryData, setDiaryData, deleteDiaryData } from 'config/diary';
import { DiaryItemProps, DiaryDataType, DiaryListType, SortType } from 'types';

// 타입 선언
// ReturnType <typeof > 는 특정 함수의 타입을 추론함.
type diaryAction = ReturnType<typeof setDiaryList>
  | ReturnType<typeof initDiaryList>
  | ReturnType<typeof removeDiaryList>
  | ReturnType<typeof resetDiaryList>;

// 액션 타입 지정
const SET_DIARYLIST = 'DIARY/SET_DIARY' as const;
const INIT_DIARYLIST = 'DIARY/INIT_DIARYLIST' as const;
const REMOVE_DIARYLIST = 'DIARY/REMOVE_DIARYLIST' as const;
const RESET_DIARYLIST = 'DIARY/RESET_DIARYLIST' as const;

// 액션 생성 함수 지정
export const setDiaryList = (payload: { sort: string, data: DiaryListType }) => ({
  type: SET_DIARYLIST,
  payload: payload
});

export const initDiaryList = (payload: DiaryDataType) => ({
  type: INIT_DIARYLIST,
  payload: payload
});

export const removeDiaryList = (payload: SortType) => ({
  type: REMOVE_DIARYLIST,
  payload: payload
});

export const resetDiaryList = () => ({
  type: RESET_DIARYLIST
});

export const getDiaryDataThunk = (diaryItem: { uid: string, date: string }): any => {
  return async (dispatch: any) => {
    try {
      const diary = await getDiaryData(diaryItem);

      const breakfastData = diary.data.find((data) => data.sort === 'breakfast');
      const lunchData = diary.data.find((data) => data.sort === 'lunch');
      const dinnerData = diary.data.find((data) => data.sort === 'dinner');
      const snackData = diary.data.find((data) => data.sort === 'snack');

      if (diary.state) {
        const newData: DiaryDataType = {
          breakfast: breakfastData === undefined ? { sort: 'breakfast', sortText: '아침' } : breakfastData,
          lunch: lunchData === undefined ? { sort: 'lunch', sortText: '점심' } : lunchData,
          dinner: dinnerData === undefined ? { sort: 'dinner', sortText: '저녁' } : dinnerData,
          snack: snackData === undefined ? { sort: 'snack', sortText: '간식' } : snackData,
          isLoading: true
        }

        dispatch(initDiaryList(newData));
      } else {
        const newData = {
          breakfast: { sort: 'breakfast', sortText: '아침' },
          lunch: { sort: 'lunch', sortText: '점심' },
          dinner: { sort: 'dinner', sortText: '저녁' },
          snack: { sort: 'snack', sortText: '간식' },
          isLoading: true
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
          const newData: any = {
            sort: diaryItem.sort,
            data: diaryItem.data
          }

          dispatch(setDiaryList(newData));
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
  isLoading: false
};

// 리듀서
const diary = (state: DiaryDataType = initState, action: diaryAction): any => {
  switch (action.type) {
    case INIT_DIARYLIST:
      return state = action.payload;
    case SET_DIARYLIST:
      return {
        ...state,
        [action.payload.sort]: action.payload.data
      };
    case REMOVE_DIARYLIST:
      return {
        ...state,
        [action.payload]: initState[action.payload]
      };
    case RESET_DIARYLIST:
      return state = initState;
    default:
      return state;
  }
}

export default diary;
