import {Icon} from 'components';
import './IconList.scss';

export const IconList = ({data}: {data: any}) => {
  return (
    <div className='IconList'>
      {
        data.map((item: any, i: number) =>
          <Icon type='default' text={item.DESC_KOR} key={`IconList_${item.DESC_KOR}_${i}`} />
        )
      }
    </div>
  );
}
