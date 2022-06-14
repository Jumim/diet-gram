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

}

export const DiaryList = ({

}: DiaryListType) => {
  return (
    <div className='DiaryList rightContents'>
      dds
    </div>
  );
}
