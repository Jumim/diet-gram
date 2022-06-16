import { Feed, Icon, IconList, Text, Button } from 'components';
import './DiaryList.scss';

interface DiaryListType {
  breakfastData: any
  lunchData: any
  dinnerData: any
  snackData: any
  navi: any
  hanbleWrite1: () => void
  hanbleWrite2: () => void
  hanbleWrite3: () => void
  hanbleWrite4: () => void
  deleteDiaryItem: (sort: string) => void
}

export const DiaryList = ({
  breakfastData = {},
  lunchData = {},
  dinnerData = {},
  snackData = {},
  navi,
  hanbleWrite1,
  hanbleWrite2,
  hanbleWrite3,
  hanbleWrite4,
  deleteDiaryItem
}: DiaryListType) => {
  return (
    <div className='DiaryList rightContents'>
      <Feed className='DiaryFeed'>
        {
          Object.keys(breakfastData).length === 0 ?
            <>
              <Text>아직 작성된 아침이 없습니다. 아침 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='아침 추가하기' onClick={() => navi('/write/breakfast')} />
            </>
            :
            <>
              <Icon type='Breakfast' text={'아침'} />
              <IconList data={breakfastData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => navi('/edit/breakfast')} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => deleteDiaryItem('breakfast')} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(lunchData).length === 0 ?
            <>
              <Text>아직 작성된 점심이 없습니다. 점심 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='점심 추가하기' onClick={() => navi('/write/lunch')} />
            </>
            :
            <>
              <Icon type='Lunch' text={'점심'} />
              <IconList data={lunchData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => navi('/edit/lunch')} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => deleteDiaryItem('lunch')} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(dinnerData).length === 0 ?
            <>
              <Text>아직 작성된 저녁이 없습니다. 저녁 식사를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='저녁 추가하기' onClick={() => navi('/write/dinner')} />
            </>
            :
            <>
              <Icon type='Dinner' text={'저녁'} />
              <IconList data={dinnerData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => navi('/edit/dinner')} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => deleteDiaryItem('dinner')} />
              </div>
            </>
        }
      </Feed>
      <Feed className='DiaryFeed'>
        {
          Object.keys(snackData).length === 0 ?
            <>
              <Text>아직 작성된 간식이 없습니다. 간식을 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' text='간식 추가하기' onClick={() => navi('/write/snack')} />
            </>
            :
            <>
              <Icon type='Snack' text={'간식'} />
              <IconList data={snackData.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => navi('/edit/snack')} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => deleteDiaryItem('snack')} />
              </div>
            </>
        }
      </Feed>
    </div>
  );
}
