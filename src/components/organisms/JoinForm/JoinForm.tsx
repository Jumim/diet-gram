import { Form, InputArea, Button, SelectArea } from 'components';
import './JoinForm.scss';

interface JoinFormProps {
  onSubmit: () => void
  register: any
}

export const JoinForm = ({ onSubmit, register }: JoinFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputArea
        label='아이디'
        name='id'
        type='text'
        register={register}
        placeholder='아이디를 입력해주세요.'
      />
      <InputArea
        label='비밀번호'
        name='password'
        type='password'
        register={register}
        placeholder='비밀번호를 입력해주세요.'
      />
      <InputArea
        label='비밀번호 확인'
        name='passwordCheck'
        type='password'
        register={register}
        placeholder='비밀번호를 입력해주세요.'
      />
      <InputArea
        label='닉네임'
        name='nickname'
        type='text'
        register={register}
        placeholder='닉네임을 입력해주세요.'
      />
      <div className='InputRow'>
        <InputArea
          label='나이'
          name='age'
          type='number'
          register={register}
          placeholder='나이를 입력해주세요.'
        />
        <InputArea
          label='키'
          name='height'
          type='number'
          register={register}
          placeholder='키를 입력해주세요.'
        />
      </div>
      <SelectArea
        label='활동 레벨'
        name='activityLevel'
        register={register}
        item={activityLevelList}
      />
      <Button btnType='positive' type='submit' text='회원가입' />
    </Form>
  )
}

const activityLevelList = [
  { name: '매우 활동적', value: '4' },
  { name: '활동적', value: '3' },
  { name: '비교적 활동적', value: '2' },
  { name: '거의 활동하지 않음', value: '1' }
];
