import moment from 'moment';
import { Form, InputArea, Button, FoodList } from 'components';
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
      <Button btnType='positive' type='button' onClick={handleFoodModal}>음식 추가하기</Button>
      <Button btnType='positive' type='submit'>작성</Button>
    </Form>
  )
}
