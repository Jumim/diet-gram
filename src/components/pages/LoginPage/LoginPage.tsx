import { Title, DefaultTemplate } from 'components';
import { LoginFormContainer } from 'containers';

export const LoginPage = () => {
  return (
    <DefaultTemplate>
      <Title>로그인</Title>
      <LoginFormContainer />
    </DefaultTemplate>
  )
}
