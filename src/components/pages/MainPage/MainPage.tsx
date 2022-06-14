import { MainTemplate } from 'components';
import { UserModalContainer, MainHeaderContainer, CalorieInfoContainer, MainContainer } from 'containers';

export const MainPage = () => {
  return (
    <MainTemplate header={<MainHeaderContainer />}>
      <UserModalContainer />
      <CalorieInfoContainer />
      <MainContainer />
    </MainTemplate>
  )
}
