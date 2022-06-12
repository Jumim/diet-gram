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
        label='이메일'
        name='email'
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
      <Button btnType='positive' type='submit' text='회원가입' />
    </Form>
  )
}
