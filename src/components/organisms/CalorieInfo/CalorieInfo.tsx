import { Text, MyResponsivePie } from 'components';
import './CalorieInfo.scss';

interface userType {
  name: string
  calorie: number
}

interface CalorieInfoType {
  userData: userType
  totalInfo: any
}

export const CalorieInfo = ({ userData, totalInfo }: CalorieInfoType) => {
  return (
    <div className='CalorieInfo'>
      <div>
        <Text>{`${userData.name}님의 하루 칼로리`}</Text>
        <Text>{`${Math.floor(userData.calorie).toLocaleString()} kcal`}</Text>
      </div>
      <div>
        <Text>오늘의 총 섭취 칼로리</Text>
        <Text>{`${Math.floor(totalInfo[0]).toLocaleString()} kcal`}</Text>
      </div>
      {
        totalInfo[1][0].value <= 0 && totalInfo[1][1].value <= 0 && totalInfo[1][2].value <= 0 ?
          <></>
          :
          <MyResponsivePie data={totalInfo[1]} />
      }
    </div>
  )
}
