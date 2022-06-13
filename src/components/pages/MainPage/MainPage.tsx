import { MainTemplate } from 'components';
import { MainContainer, MainHeaderContainer } from 'containers';

export const MainPage = () => {
  return (
    <MainTemplate header={<MainHeaderContainer />}>
      <MainContainer />
    </MainTemplate>
  )
}
