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
  hanbleNavigation: () => void
}

export const DiaryList = ({
  hanbleNavigation
}: DiaryListType) => {
  return (
    <div className='DiaryList'>
      
    </div>
  );
}
