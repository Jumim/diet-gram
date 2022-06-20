import { InView } from 'react-intersection-observer';
import { FoodListType } from 'types';
import { Text, Button, Feed, Icon, Wrapper } from 'components';
import './FoodList.scss';

interface FoodListProps {
  data: FoodListType[]
  btnText: string
  onClick: (data: FoodListType) => void
  inView?: boolean,
  setInView?: any
}

export const FoodList = ({
  data,
  btnText,
  onClick,
  inView,
  setInView
}: FoodListProps) => {
  return (
    <div className='FoodList'>
      {
        data.map((data, i) =>
          <Feed key={'FoodFeed_' + i} className='FoodFeed'>
            <div className='NutrientsText'>
              <Text>{data.DESC_KOR}</Text>
              <Text>{Math.floor(Number(data.NUTR_CONT1)) + ' kcal'}</Text>
            </div>
            <div className='NutrientsIconList'>
              <Icon type='Default' text={`탄수화물 ${Math.floor(Number(data.NUTR_CONT2))} g`} />
              <Icon type='Default' text={`단백질 ${Math.floor(Number(data.NUTR_CONT3))} g`} />
              <Icon type='Default' text={`지방 ${Math.floor(Number(data.NUTR_CONT4))} g`} />
            </div>
            <Button btnType={btnText === '삭제' ? 'negative' : 'positive'} type='button' onClick={() => onClick(data)}>{btnText}</Button>
          </Feed>
        )
      }
      {
        (setInView && data.length > 0) &&
        <InView onChange={setInView}>
          <Wrapper>
            { inView && <Text>데이터 불러오는중</Text> }
          </Wrapper>
        </InView>
      }
    </div>
  );
}
