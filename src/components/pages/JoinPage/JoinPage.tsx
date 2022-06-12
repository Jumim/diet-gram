import { JoinForm, Title, DefaultTemplate } from 'components';

export const JoinPage = () => {
  return (
    <DefaultTemplate>
      <Title>회원가입</Title>
      <JoinForm onSubmit={() => {}} />
    </DefaultTemplate>
  )
}
