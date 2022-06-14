import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setDate } from 'store/modules/date';
import { Button, Header, Title } from 'components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export const MainHeaderContainer = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.date);
  const day = new Date(date);

  // 이전날
  const prevDay = () => {
    day.setDate(day.getDate() - 1);
    dispatch(setDate(`${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`));
  }

  // 다음날
  const nextDay = () => {
    day.setDate(day.getDate() + 1);
    dispatch(setDate(`${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`));
  }

  return (
    <Header>
      <Button text={<AiOutlineDoubleLeft />} type='button' btnType='default' onClick={() => prevDay()} />
      <Title>{date}</Title>
      <Button text={<AiOutlineDoubleRight />} type='button' btnType='default' onClick={() => nextDay()} />
    </Header>
  )
}
