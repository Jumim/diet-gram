import { DefaultTemplate } from 'components';
import { UserModalContainer, MyPageHeaderContainer, MyPageContainer } from 'containers';

export const MyPage = () => {
  return (
    <DefaultTemplate header={<MyPageHeaderContainer />}>
      <UserModalContainer closeSet={true} />
      <MyPageContainer />
    </DefaultTemplate>
  )
}
