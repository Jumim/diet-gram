interface DiaryListType {
  uid: string
  id: number
  date: string
  food: any
  sort: string
  totalCal: number
  totalCarbs: number
  totalProtain: number
  totalFat: number
}

// 타입 선언
// ReturnType <typeof > 는 특정 함수의 타입을 추론함.
type diaryAction = ReturnType<typeof setDiaryList>
                   | ReturnType<typeof removeDiaryList>
                   | ReturnType<typeof editDiaryList>;

// 액션 타입 지정
const SET_DIARYLIST = 'DIARY/SET_DIARY' as const;
const REMOVE_DIARYLIST = 'DIARY/REMOVE_DIARYLIST' as const;
const EDIT_DIARYLIST = 'DIARY/EDIT_DIARYLIST' as const;

// 액션 생성 함수 지정
export const setDiaryList = (diaryItem: DiaryListType) => ({
  type: SET_DIARYLIST,
  diaryItem: diaryItem
});

export const removeDiaryList = (id: number) => ({
  type: REMOVE_DIARYLIST,
  diaryItem: id
});

export const editDiaryList = (diaryItem: DiaryListType) => ({
  type: EDIT_DIARYLIST,
  diaryItem: diaryItem
});

const initState: DiaryListType[] = [];

// 리듀서
const diary = (state: DiaryListType[] = initState, action: diaryAction): DiaryListType[] => {
  switch (action.type) {
    case SET_DIARYLIST:
      return [
        ...state,
        action.diaryItem
      ];
    case REMOVE_DIARYLIST:
      return state.filter((data: any) => data.id !== action.diaryItem);
    case EDIT_DIARYLIST:
      return state.map((el: any) =>
        el.id === action.diaryItem.id ?
          {...action.diaryItem}
          : el
      );
    default:
      return state;
  }
}

export default diary;
