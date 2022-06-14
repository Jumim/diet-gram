import { DefaultTemplate, Title } from 'components';
import { WriteFormContainer } from 'containers';

export const WritePage = () => {
  return (
    <DefaultTemplate>
      <Title>다이어리 작성</Title>
      <WriteFormContainer />
    </DefaultTemplate>
  )
}
