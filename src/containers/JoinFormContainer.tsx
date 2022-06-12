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
  const { register, handleSubmit } = useForm<JoinFormType>({
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
    />
  );
}

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.'),
  passwordCheck: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
});

// 권장 칼로리 게산
const recommendedCalorie = (height: number, activityLevel: string) => {
  let daykcal = 0;
  let activityIndex = 0;

  // 활동지수
  switch (activityLevel) {
    case '1':
      activityIndex = 25;
      break;
    case '2':
      activityIndex = 30;
      break;
    case '3':
      activityIndex = 35;
      break;
    case '4':
      activityIndex = 40;
      break;
  }

  // 권장 칼로리 계산
  daykcal = Math.floor(((height - 100) * 0.9) * activityIndex);

  return daykcal;
}

const activityLevelList = [
  { name: '매우 활동적', value: '4' },
  { name: '활동적', value: '3' },
  { name: '비교적 활동적', value: '2' },
  { name: '거의 활동하지 않음', value: '1' }
];
