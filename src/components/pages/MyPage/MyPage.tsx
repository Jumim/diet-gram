import { DefaultTemplate } from 'components';
import { UserModalContainer, MainHeaderContainer, MyPageContainer } from 'containers';

export const MyPage = () => {
  return (
    <DefaultTemplate header={<MainHeaderContainer />}>
      <UserModalContainer closeSet={true} />
      <MyPageContainer />
    </DefaultTemplate>
  )
}
