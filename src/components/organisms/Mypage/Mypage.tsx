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
        내 정보 변경하기
      </Button>
    </div>
  )
}
