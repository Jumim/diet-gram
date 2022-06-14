import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setUserThunk } from 'store/modules/user';
import { setUserModal } from 'store/modules/userModal';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserModal } from 'components';

interface UserFormType {
  name: string
  age: number
  height: number
  activityLevelList: string
}

export const UserModalContainer = () => {
  const dispatch = useDispatch();

  const authData = useSelector((state: RootState) => state.auth);
  const userModal = useSelector((state: RootState) => state.userModal);

  const { register, handleSubmit, formState: { errors } } = useForm<UserFormType>({
    resolver: yupResolver(userFormSchema)
  });

  const onSubmit: SubmitHandler<UserFormType> = (data: any) => {
    const daykcal = recommendedCalorie(data.height, data.activityLevel);

    const userInfo = {
      uid: authData.uid,
      name: data.name,
      calorie: daykcal
    };

    dispatch(setUserThunk(userInfo));
    setUserModal(false);
  }

  return (
    <>
      {
        userModal &&
          <UserModal
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            activityLevelList={activityLevelList}
          />
      }
    </>
  )
}

const userFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('이름을 입력해주세요.'),
  age: yup
    .number()
    .required('나이를 입력해주세요.'),
  height: yup
    .number()
    .required('키를 입력해주세요.'),
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
