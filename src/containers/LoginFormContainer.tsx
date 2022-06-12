import {useForm, SubmitHandler} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginForm } from 'components';

interface LoginFormType {
  id: string
  password: string
}

export const LoginFormContainer = () => {
  const {register, handleSubmit} = useForm<LoginFormType>({
    resolver: yupResolver(userFormSchema)
  });

  const onSubmit: SubmitHandler<LoginFormType> = (data: any) => {
    console.log(data);
    console.log('login form submit');
  }

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
}

const userFormSchema = yup.object().shape({
  id: yup
    .string()
    .required('아이디를 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
});
