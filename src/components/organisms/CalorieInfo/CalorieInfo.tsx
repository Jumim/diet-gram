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
      <div className='CalorieInfoTextArea left'>
        <Text size='regular'>{`${userData.name}님의 하루 권장 칼로리는`}</Text>
        <div>
          <Text size='large'>{`${Math.floor(userData.calorie).toLocaleString()}`}</Text>
          <Text size='regular'>kcal</Text>
        </div>
      </div>
      {
        isLoading &&
        <>
          <div className='CalorieInfoTextArea right'>
            <Text size='regular'>오늘의 총 섭취 칼로리는</Text>
            <div>
              <Text size='large'>{`${Math.floor(totalInfo[0]).toLocaleString()}`}</Text>
              <Text size='regular'>kcal</Text>
            </div>
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
