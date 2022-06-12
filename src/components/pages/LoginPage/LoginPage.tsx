import { LoginForm, Title, DefaultTemplate } from 'components';
import './LoginPage.scss';

export const LoginPage = () => {
  return (
    <DefaultTemplate>
      <Title>로그인</Title>
      <LoginForm onSubmit={() => { console.log('login form submit') }} />
    </DefaultTemplate>
  )
}
