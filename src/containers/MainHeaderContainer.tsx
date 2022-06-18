import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, batch } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setDate, getDiaryDataThunk } from 'store/modules';
import { logout } from 'config/auth';
import { Button, Header, Text } from 'components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export const MainHeaderContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const date = useSelector((state: RootState) => state.date);
  const day = new Date(date);

  // 이전날
  const prevDay = () => {
    day.setDate(day.getDate() - 1);

    const newDate = `${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`;

    batch(() => {
      dispatch(setDate(newDate));
      dispatch(getDiaryDataThunk({ uid: user.uid, date: newDate }));
    });
  }

  // 다음날
  const nextDay = () => {
    day.setDate(day.getDate() + 1);

    const newDate = `${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`;

    batch(() => {
      dispatch(setDate(newDate));
      dispatch(getDiaryDataThunk({ uid: user.uid, date: newDate }));
    });
  }

  const handleLogout = () => {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      logout()
        .then(() => {
          alert('로그아웃에 성공하셨습니다.');
          navi('/login');
        })
        .catch((err: string) => {
          console.log(err);
        })
    }
  }

  return (
    <Header handleLogout={handleLogout}>
      <Button type='button' btnType='default' onClick={() => prevDay()}><AiOutlineDoubleLeft /></Button>
      <Text size='regular'>{date}</Text>
      <Button type='button' btnType='default' onClick={() => nextDay()}><AiOutlineDoubleRight /></Button>
    </Header>
  )
}
