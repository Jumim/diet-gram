import { InView } from 'react-intersection-observer';
import { FoodListType as FoodType } from 'types';
import { Text, Button, Feed, Icon, Wrapper } from 'components';
import './FoodList.scss';

interface FoodListType {
  data: FoodType[]
  btnText: string
  onClick: any
  inView?: boolean
  setInView?: any
}

export const FoodList = ({ data, btnText, onClick, setInView }: FoodListType) => {
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
            <Button btnType='positive' type='button' onClick={() => onClick(data)}>{btnText}</Button>
          </Feed>
        )
      }
      {
        (setInView && data.length > 0) &&
        <InView onChange={setInView}>
          <Wrapper></Wrapper>
        </InView>
      }
    </div>
  );
}
