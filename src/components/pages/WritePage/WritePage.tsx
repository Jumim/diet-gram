import { DefaultTemplate, Title } from 'components';
import { WriteFormContainer, FoodModalContainer, WriteHeaderContainer } from 'containers';

export const WritePage = () => {
  return (
    <DefaultTemplate header={<WriteHeaderContainer />}>
      <Title>다이어리 작성</Title>
      <WriteFormContainer isEdit={false} />
      <FoodModalContainer />
    </DefaultTemplate>
  )
}
