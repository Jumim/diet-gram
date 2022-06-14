import { Title, DefaultTemplate } from 'components';
import { JoinFormContainer } from 'containers';

export const JoinPage = () => {
  return (
    <DefaultTemplate>
      <Title>회원가입</Title>
      <JoinFormContainer />
    </DefaultTemplate>
  )
}
