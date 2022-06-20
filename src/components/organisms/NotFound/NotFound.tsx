import { Text, Link } from 'components';
import { TbMoodSad } from 'react-icons/tb';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <div className='NotFound'>
      <TbMoodSad />
      <div className='NotFoundTextArea'>
        <Text size='large'>404</Text>
        <Text size='regular'>NOT FOUND</Text>
        <Text size='small'>현재 찾고 계신 페이지가 존재하지 않습니다.</Text>
      </div>
      <Link to='/' type='line'>메인페이지로 이동하기</Link>
    </div>
  )
}
