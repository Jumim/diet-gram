import { Title, DefaultTemplate } from 'components';
import { JoinFormContainer } from 'containers';

export const JoinPage = ({authenticated}: {authenticated: boolean}) => {
  return (
    <DefaultTemplate>
      <Title>회원가입</Title>
      <JoinFormContainer authenticated={authenticated} />
    </DefaultTemplate>
  )
}
