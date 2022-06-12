import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { join } from 'config/auth';
import { JoinForm } from 'components';

interface JoinFormType {
  email: string
  password: string
  passwordCheck: string
}

export const JoinFormContainer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<JoinFormType>({
    resolver: yupResolver(userFormSchema)
  });

  const onSubmit: SubmitHandler<JoinFormType> = async (data: any) => {
    try {
      await join(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <JoinForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
}

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(5, '이메일 5자 이상 10자 이하로 입력해주세요.')
    .max(10, '이메일은 5자 이상 10자 이하로 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
    .max(20, '비밀번호는 8자 이상 20자 이하로 입력해주세요.')
    .required('비밀번호를 입력해주세요.'),
  passwordCheck: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
});
