import { Button } from 'components';

interface MypageProps {
  handleModal: () => {}
}

export const Mypage = ({
  handleModal,
}: MypageProps) => {
  return (
    <div className='MyPage'>
      <Button btnType='positive' type='button' onClick={handleModal}>
        내 정보 변경
      </Button>
      <Button btnType='negative' type='button' onClick={() => {}}>
        회원 탈퇴
      </Button>
    </div>
  )
}
