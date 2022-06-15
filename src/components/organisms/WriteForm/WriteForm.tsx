import moment from 'moment';
import { Form, InputArea, Button, SelectArea, FoodList } from 'components';
import { FoodListType } from 'types';

interface WriteFormProps {
  onSubmit: () => void
  date: any
  foodList: any
  register: any
  sortValue: string | undefined
  handleRemoveFoodList: (foodData: FoodListType) => void
  handleFoodModal: () => void
}

export const WriteForm = ({
  onSubmit,
  date,
  foodList,
  register,
  sortValue,
  handleRemoveFoodList,
  handleFoodModal
}: WriteFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputArea
        label='날짜'
        name='date'
        type='date'
        register={register}
        defaultValue={moment(date).format('YYYY-MM-DD')}
      />
      <InputArea
        label='구분'
        name='sort'
        type='string'
        register={register}
        defaultValue={sortValue}
        readOnly={true}
      />
      { foodList.length > 0 && <FoodList data={foodList} btnText='삭제' onClick={handleRemoveFoodList} /> }
      <Button btnType='positive' type='button' text='음식 추가하기' onClick={handleFoodModal} />
      <Button btnType='positive' type='submit' text='작성' />
    </Form>
  )
}
