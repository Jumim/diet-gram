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

export const CalorieInfo = ({
  userData,
  totalInfo = []
}: CalorieInfoType) => {
  return (
    <div className='CalorieInfo leftContents'>
      <div className='CalorieInfoTextArea'>
        <Text size='regular'>{`${userData.name}님의 하루 칼로리`}</Text>
        <Text size='regular'>{`${Math.floor(userData.calorie).toLocaleString()} kcal`}</Text>
      </div>
      <div className='CalorieInfoTextArea'>
        <Text size='regular'>오늘의 총 섭취 칼로리</Text>
        <Text size='regular'>{`${Math.floor(totalInfo.totalCal).toLocaleString()} kcal`}</Text>
      </div>
      {
        totalInfo.totalCarbs <= 0 && totalInfo.totalProtain <= 0 && totalInfo.totalFat <= 0 ?
          <></>
          :
          <MyResponsivePie data={[
            {id: '탄수화물(g)', label: '탄수화물(g)', value: totalInfo.totalCarbs},
            {id: '단백질(g)', label: '단백질(g)', value: totalInfo.totalProtain},
            {id: '지방(g)', label: '지방(g)', value: totalInfo.totalFat}
          ]} />
      }
    </div>
  )
}
