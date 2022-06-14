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
  hanbleWrite1: () => void
  hanbleWrite2: () => void
  hanbleWrite3: () => void
  hanbleWrite4: () => void
}

export const DiaryList = ({
  hanbleWrite1,
  hanbleWrite2,
  hanbleWrite3,
  hanbleWrite4
}: DiaryListType) => {
  return (
    <div className='DiaryList rightContents'>
      <Feed className=''>
        <Button btnType='positive' type='button' text='아침 작성하기' onClick={hanbleWrite1}/>
      </Feed>
      <Feed className=''>
        <Button btnType='positive' type='button' text='점심 작성하기' onClick={hanbleWrite2}/>
      </Feed>
      <Feed className=''>
        <Button btnType='positive' type='button' text='저녁 작성하기' onClick={hanbleWrite3}/>
      </Feed>
      <Feed className=''>
        <Button btnType='positive' type='button' text='간식 작성하기' onClick={hanbleWrite4}/>
      </Feed>
    </div>
  );
}
