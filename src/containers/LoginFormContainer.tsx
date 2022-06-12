import {useForm, SubmitHandler} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'config/auth';
import { LoginForm } from 'components';

interface LoginFormType {
  email: string
  password: string
}

export const LoginFormContainer = () => {
  const {register, handleSubmit} = useForm<LoginFormType>({
    resolver: yupResolver(userFormSchema)
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data: any) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
}

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
});
