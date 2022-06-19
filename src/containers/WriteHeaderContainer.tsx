import { useNavigate } from 'react-router-dom';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { Button, Header, Text } from 'components';

export const WriteHeaderContainer = () => {
  const navi = useNavigate();

  return (
    <Header
      left={<Button type='button' btnType='default' onClick={() => navi(-1)}><AiOutlineDoubleLeft /></Button>}
      center={<Text size='regular'>다이어리 작성</Text>}
    />
  )
}
