import { Title, DefaultTemplate } from 'components';
import { LoginFormContainer } from 'containers';
import './LoginPage.scss';

export const LoginPage = ({authenticated}: {authenticated: boolean}) => {
  return (
    <DefaultTemplate>
      <Title>로그인</Title>
      <LoginFormContainer authenticated={authenticated} />
    </DefaultTemplate>
  )
}
