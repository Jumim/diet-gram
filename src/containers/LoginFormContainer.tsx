import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'config/auth';
import { LoginForm } from 'components';

interface LoginFormType {
  email: string
  password: string
}

export const LoginFormContainer = ({authenticated}: {authenticated: boolean}) => {
  const navi = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
    resolver: yupResolver(loginFormSchema)
  });

  useEffect(() => {
    if(authenticated) {
      alert('이미 로그인 되어있습니다. 메인페이지로 이동합니다.');
      navi('/');
    }
  }, []);

  const onSubmit: SubmitHandler<LoginFormType> = async (data: any) => {
    try {
      await login(data.email, data.password);
      navi('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
}

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
    .max(20, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
    .required('비밀번호를 입력해주세요.'),
});
