import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { CalorieInfo } from 'components';

export const CalorieInfoContainer = () => {
  const userData = useSelector((state: RootState) => state.user);
  const date = useSelector((state: RootState) => state.date);
  const diary = useSelector((state: RootState) => state.diary);

  const totalInfo = () => {
    var totalCalorie = 0;
    var totalCarbs = 0;
    var totalProtain = 0;
    var totalFat = 0;

    const diaryList = diary.filter((data) => data.date === date);

    diaryList.forEach((data) => {
      totalCalorie += data.totalCal
      totalCarbs += data.totalCarbs
      totalProtain += data.totalProtain
      totalFat += data.totalFat
    });

    const totalData = [
      {
        id: '탄수화물(g)',
        value: totalCarbs
      },
      {
        id: '단백질(g)',
        value: totalProtain
      },
      {
        id: '지방(g)',
        value: totalFat
      }
    ];

    return [totalCalorie, totalData];
  }

  return (
    <CalorieInfo
      userData={userData}
      totalInfo={totalInfo()}
    />
  )
}
