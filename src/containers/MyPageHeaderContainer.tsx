import { useNavigate } from 'react-router-dom';
import { logout } from 'config/auth';
import { useDispatch, batch } from 'react-redux';
import { resetAuth, resetUser, resetDiaryList } from 'store/modules';
import { RiUserSmileFill, RiLogoutBoxRLine } from 'react-icons/ri';
import { Button, Header, Text, Link } from 'components';

export const MyPageHeaderContainer = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logout()
        .then(() => {
          alert('로그아웃에 성공하셨습니다.');

          batch(() => {
            dispatch(resetAuth())
            dispatch(resetUser())
            dispatch(resetDiaryList())
          });
          navi('/login');
        })
        .catch((err: string) => {
          console.log(err);
        })
    }
  }

  return (
    <Header
      left={
        <Link to='/' type='none'>
          <img src={`${process.env.PUBLIC_URL}/image/dietgram_logo.png`}></img>
        </Link>
      }
      right={
        <>
          <Button type='button' btnType='default' onClick={() => navi('/mypage')}><RiUserSmileFill /></Button>
          <Button type='button' btnType='default' onClick={handleLogout}><RiLogoutBoxRLine /></Button>
        </>
      }
      center={<Text size='regular'>마이페이지</Text>}
    />
  )
}
