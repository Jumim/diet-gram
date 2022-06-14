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
            <Text>{data.DESC_KOR}</Text>
            <Text>{Math.floor(Number(data.NUTR_CONT1)) + ' kcal'}</Text>
            <div className='nutrientsIconList'>
              <Icon type='default' text={`탄수화물 ${Math.floor(Number(data.NUTR_CONT2))} g`} />
              <Icon type='default' text={`단백질 ${Math.floor(Number(data.NUTR_CONT3))} g`} />
              <Icon type='default' text={`지방 ${Math.floor(Number(data.NUTR_CONT4))} g`} />
            </div>
            <Button btnType='positive' type='button' text={btnText} onClick={() => onClick(data)} />
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
