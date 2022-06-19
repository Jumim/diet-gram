import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { deleteDiaryDataThunk } from 'store/modules';
import { DiaryList, CalorieInfo } from 'components';
import { DiaryItemProps, SortType } from 'types';

export const MainContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);
  const date = useSelector((state: RootState) => state.date);
  const diary = useSelector((state: RootState) => state.diary);

  const deleteDiaryItem = (sort: SortType) => {
    const diaryItem: DiaryItemProps = {
      uid: userData.uid,
      date: date,
      sort: sort,
    };

    dispatch(deleteDiaryDataThunk(diaryItem));
  }

  const totalInfo = () => {
    var totalCalorie = 0;
    var totalCarbs = 0;
    var totalProtain = 0;
    var totalFat = 0;

    const newData = [diary.breakfast, diary.lunch, diary.dinner, diary.snack];

    newData.forEach((data: any) => {
      totalCalorie += Number((data.totalCal === undefined ? 0 : data.totalCal))
      totalCarbs += Number((data.totalCarbs === undefined ? 0 : data.totalCarbs))
      totalProtain += Number((data.totalProtain === undefined ? 0 : data.totalProtain))
      totalFat += Number((data.totalFat === undefined ? 0 : data.totalFat))
    });

    const totalData = [
      {
        id: '탄수화물(g)',
        value: Math.floor(totalCarbs)
      },
      {
        id: '단백질(g)',
        value: Math.floor(totalProtain)
      },
      {
        id: '지방(g)',
        value: Math.floor(totalFat)
      }
    ];

    return [totalCalorie, totalData];
  }

  return (
    <>
      <CalorieInfo
        userData={userData}
        totalInfo={diary.isLoading && totalInfo()}
        isLoading={diary.isLoading}
      />
      <DiaryList
        diary={diary.isLoading && [diary.breakfast, diary.lunch, diary.dinner, diary.snack]}
        navi={navi}
        deleteDiaryItem={deleteDiaryItem}
      />
    </>
  )
}
