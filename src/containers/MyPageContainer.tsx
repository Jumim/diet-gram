import { useDispatch } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setUserModal } from 'store/modules';
import { Mypage } from 'components';

export const MyPageContainer = () => {
  const dispatch = useDispatch();

  return (
    <Mypage
      handleModal={() => dispatch(setUserModal(true))}

    />
  )
}
