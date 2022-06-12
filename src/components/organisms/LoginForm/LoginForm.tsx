import { Form, InputArea, Button, Link } from 'components';
import './LoginForm.scss';

interface LoginFormProps {
  onSubmit: () => void
  register: any
}

export const LoginForm = ({ onSubmit, register }: LoginFormProps) => {
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
      <Button btnType='positive' type='submit' text='로그인' />
      <Link to='/join'>회원가입</Link>
    </Form>
  )
}
