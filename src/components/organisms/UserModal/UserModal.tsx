import { Modal, Title, Text, Button, InputArea, SelectArea, Form } from 'components';
import './UserModal.scss';

interface UserModalProps {
  onSubmit: () => void
  register: any
  errors: any
  activityLevelList: any
}

export const UserModal = ({
  onSubmit,
  register,
  errors,
  activityLevelList
}: UserModalProps) => {
  return (
    <Modal>
      <div className='UserModalTop'>
        <Title>유저 정보 입력</Title>
      </div>
      <div className='UserModalBottom'>
        <div className='UserContent'>
          <Text>마이페이지에서 정보를 수정할 수 있습니다.</Text>
          <Text>(나이, 키, 활동지수는 권장 칼로리 계산에 사용되며 따로 저장되지 않습니다.)</Text>
        </div>
        <Form onSubmit={onSubmit}>
          <InputArea
            label='이름'
            name='name'
            type='text'
            register={register}
            placeholder='이름을 입력해주세요.'
            error={errors.name && errors.name.message}
          />
          <InputArea
            label='나이'
            name='age'
            type='number'
            register={register}
            placeholder='나이를 입력해주세요.'
            error={errors.age && errors.age.message}
          />
          <InputArea
            label='키'
            name='height'
            type='number'
            register={register}
            placeholder='키를 입력해주세요.'
            error={errors.height && errors.height.message}
          />
          <SelectArea
            label='활동 레벨'
            name='activityLevel'
            register={register}
            item={activityLevelList}
          />
          <Button btnType='positive' type='submit' text='정보 등록하기' />
        </Form>
      </div>
    </Modal>
  )
}
