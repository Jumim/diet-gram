import { DefaultTemplate } from 'components';
import { WriteFormContainer, FoodModalContainer, WriteHeaderContainer } from 'containers';

export const WritePage = () => {
  return (
    <DefaultTemplate header={<WriteHeaderContainer />}>
      <WriteFormContainer isEdit={false} />
      <FoodModalContainer />
    </DefaultTemplate>
  )
}
