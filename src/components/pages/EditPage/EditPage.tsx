import { DefaultTemplate, Title } from 'components';
import { WriteFormContainer, FoodModalContainer } from 'containers';

export const EditPage = () => {
  return (
    <DefaultTemplate>
      <Title>다이어리 수정</Title>
      <WriteFormContainer isEdit={true}/>
      <FoodModalContainer />
    </DefaultTemplate>
  )
}
