import { Feed, Icon, IconList, Text, Button } from 'components';
import './DiaryList.scss';

interface Diarytype {
  id: number
  date: string
  food: any
  sort: string
  totalCal: number
  totalCarbs: number
  totalProtain: number
  totalFat: number
}

interface DiaryListType {
  breakfastData: any
  lunchData: any
  dinnerData: any
  snackData: any
  hanbleWrite1: () => void
  hanbleWrite2: () => void
  hanbleWrite3: () => void
  hanbleWrite4: () => void
}

export const DiaryList = ({
  breakfastData = {},
  lunchData = {},
  dinnerData = {},
  snackData = {},
  hanbleWrite1,
  hanbleWrite2,
  hanbleWrite3,
  hanbleWrite4
}: DiaryListType) => {
  return (
    <div className='DiaryList rightContents'>
      <Feed className='DiaryFeed'>
        {
          Object.keys(breakfastData).length === 0 ?
            <>
              <Text>아직 작성된 아침이 없습니다. 아침 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='아침 추가하기' onClick={hanbleWrite1} />
            </>
            :
            <>
              <Icon type='Breakfast' text={breakfastData.sort} />
              <IconList data={breakfastData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => { }} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => { }} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(lunchData).length === 0 ?
            <>
              <Text>아직 작성된 점심이 없습니다. 점심 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='점심 추가하기' onClick={hanbleWrite2} />
            </>
            :
            <>
              <Icon type='Breakfast' text={lunchData.sort} />
              <IconList data={lunchData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => { }} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => { }} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(dinnerData).length === 0 ?
            <>
              <Text>아직 작성된 저녁이 없습니다. 저녁 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='저녁 추가하기' onClick={hanbleWrite3} />
            </>
            :
            <>
              <Icon type='Breakfast' text={dinnerData.sort} />
              <IconList data={dinnerData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => { }} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => { }} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(snackData).length === 0 ?
            <>
              <Text>아직 작성된 간식이 없습니다. 간식을 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='간식 추가하기' onClick={hanbleWrite4} />
            </>
            :
            <>
              <Icon type='Breakfast' text={snackData.sort} />
              <IconList data={snackData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => { }} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => { }} />
              </div>
            </>
        }
      </Feed>
    </div>
  );
}
