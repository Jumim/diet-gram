import { MainTemplate } from 'components';
import { UserModalContainer, MainHeaderContainer, MainContainer } from 'containers';

export const MainPage = () => {
  return (
    <MainTemplate header={<MainHeaderContainer />}>
      <UserModalContainer />
      <MainContainer />
    </MainTemplate>
  )
}
