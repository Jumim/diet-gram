import { FoodListType } from 'types';
import { Modal, Input, Button, FoodList, Text, Form, Title, CloseButton } from 'components';
import './FoodModal.scss';

interface FoodModalType {
  handleModal: () => void
  onSubmit: any
  register: any
  code: string
  foodData: FoodListType[]
  foodListAdd: (foodData: FoodListType) => void
  setInView: any
}

export const FoodModal = ({
  handleModal,
  onSubmit,
  register,
  code,
  foodData,
  foodListAdd,
  setInView
}: FoodModalType) => {
  return (
    <Modal>
      <div className='FoodModalTop'>
        <Title>음식 추가하기</Title>
        <CloseButton onClick={handleModal} />
      </div>
      <div className='FoodModalBottom'>
        <Form onSubmit={onSubmit}>
          <Input
            name='selectText'
            type='text'
            register={register}
          />
          <Button btnType='positive' type='submit' >
            검색
          </Button>
        </Form>
        {
          code === 'INFO-200' ?
            <Text>검색 결과가 없습니다.</Text>
            :
            foodData.length > 0 && <FoodList data={foodData} btnText='추가' onClick={foodListAdd} setInView={setInView} />
        }
      </div>
    </Modal>
  );
}
