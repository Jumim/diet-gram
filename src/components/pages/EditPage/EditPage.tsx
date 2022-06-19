import { DefaultTemplate, Title } from 'components';
import { WriteFormContainer, FoodModalContainer, WriteHeaderContainer } from 'containers';

export const EditPage = () => {
  return (
    <DefaultTemplate header={<WriteHeaderContainer />}>
      <WriteFormContainer isEdit={true}/>
      <FoodModalContainer />
    </DefaultTemplate>
  )
}
