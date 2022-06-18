import { Form, InputArea, Button, Link } from 'components';
import './JoinForm.scss';

interface JoinFormProps {
  onSubmit: () => void
  register: any
  errors: any
}

export const JoinForm = ({ onSubmit, register, errors }: JoinFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputArea
        label='이메일'
        name='email'
        type='text'
        register={register}
        placeholder='아이디를 입력해주세요.'
        error={errors.email && errors.email.message}
      />
      <InputArea
        label='비밀번호'
        name='password'
        type='password'
        register={register}
        placeholder='비밀번호를 입력해주세요.'
        error={errors.password && errors.password.message}
      />
      <InputArea
        label='비밀번호 확인'
        name='passwordCheck'
        type='password'
        register={register}
        placeholder='비밀번호 확인을 입력해주세요.'
        error={errors.passwordCheck && errors.passwordCheck.message}
      />
      <Button btnType='positive' type='submit'>회원가입</Button>
      <div className='LoginLink'>
        <Link to='/login'>로그인</Link>
      </div>
    </Form>
  )
}
