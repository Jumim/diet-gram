import { Text, MyResponsivePie } from 'components';
import './CalorieInfo.scss';

interface userType {
  name: string
  calorie: number
}

interface CalorieInfoType {
  userData: userType
  totalInfo: any
  isLoading: boolean
}

export const CalorieInfo = ({
  userData,
  totalInfo = [],
  isLoading
}: CalorieInfoType) => {
  return (
    <div className='CalorieInfo leftContents'>
      <div className='CalorieInfoTextArea'>
        <Text size='regular'>{`${userData.name}님의 하루 권장 칼로리`}</Text>
        <Text size='regular'>{`${Math.floor(userData.calorie).toLocaleString()} kcal`}</Text>
      </div>
      {
        isLoading &&
        <>
          <div className='CalorieInfoTextArea'>
            <Text size='regular'>오늘의 총 섭취 칼로리</Text>
            <Text size='regular'>{`${Math.floor(totalInfo[0]).toLocaleString()} kcal`}</Text>
          </div>
          {
            totalInfo[1][0].value <= 0 && totalInfo[1][1].value <= 0 && totalInfo[1][2].value <= 0 ?
              <></>
              :
              <MyResponsivePie data={totalInfo[1]} />
          }
        </>
      }
    </div>
  )
}
