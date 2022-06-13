import { MainTemplate } from 'components';
import { MainContainer } from 'containers';

export const MainPage = ({ authenticated }: { authenticated: boolean }) => {
  return (
    <MainTemplate>
      <MainContainer authenticated={authenticated} />
    </MainTemplate>
  )
}
