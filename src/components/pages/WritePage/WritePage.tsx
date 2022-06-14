import { DefaultTemplate, Title } from 'components';
import { WriteFormContainer, FoodModalContainer } from 'containers';

export const WritePage = () => {
  return (
    <DefaultTemplate>
      <Title>다이어리 작성</Title>
      <WriteFormContainer />
      <FoodModalContainer />
    </DefaultTemplate>
  )
}
