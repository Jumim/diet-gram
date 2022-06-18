import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setFoodModal, removeFoodList, setDiaryDataThunk, resetFoodList, initFoodList } from 'store/modules';
import { WriteForm } from 'components';
import { WriteFormType, FoodListType, DiaryItemProps, SortType } from 'types';

interface ParamsProps {
  sort?: SortType
}

export const WriteFormContainer = ({ isEdit }: { isEdit?: boolean }) => {
  const { register, handleSubmit } = useForm<WriteFormType>();

  const navi = useNavigate();
  const { sort }: ParamsProps = useParams();

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const date = useSelector((state: RootState) => state.date);
  const diary = useSelector((state: RootState) => state.diary);
  const foodList = useSelector((state: RootState) => state.foodList);

  useEffect(() => {
    if (isEdit) {
      dispatch(initFoodList(diary[sort ? sort : '']['food']));
    } else {
      dispatch(resetFoodList());
    }
    // eslint-disable-next-line
  }, [isEdit]);

  const onSubmit: SubmitHandler<WriteFormType> = (data) => {
    if (foodList.length === 0) {
      alert('음식을 한 개 이상 추가해주세요.');
    } else {
      const totalInfo = totalCalInfo(foodList);

      const diaryItem: DiaryItemProps = {
        uid: auth.uid,
        date: data.date,
        sort: sort ? sort : 'breakfast',
        data: {
          date: data.date,
          sort: sort ? sort : 'breakfast',
          sortText: data.sort,
          food: foodList,
          totalCal: totalInfo[0],
          totalCarbs: totalInfo[1],
          totalProtain: totalInfo[2],
          totalFat: totalInfo[3]
        }
      };

      dispatch(setDiaryDataThunk(diaryItem));
      navi('/', { replace: true });
    }
  }

  return (
    <WriteForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      date={date}
      foodList={foodList}
      handleRemoveFoodList={(foodData: FoodListType) => dispatch(removeFoodList(foodData.FOOD_CD))}
      handleFoodModal={() => dispatch(setFoodModal(true))}
      sortValue={getSortText(sort)}
    />
  );
}

/* 음식 리스트 칼로리 등 계산 */
const totalCalInfo = (foodList: FoodListType[]) => {
  var totalCal = 0;   // 칼로리
  var totalCarbs = 0;   // 탄수화물
  var totalProtain = 0;   // 단백질
  var totalFat = 0;   // 지방

  foodList.forEach((data) => {
    totalCal += Number(data.NUTR_CONT1);
    totalCarbs += Number(data.NUTR_CONT2);
    totalProtain += Number(data.NUTR_CONT3);
    totalFat += Number(data.NUTR_CONT4);
  });

  return [totalCal, totalCarbs, totalProtain, totalFat];
}

const getSortText = (sort: string | undefined) => {
  switch (sort) {
    case 'breakfast':
      return '아침';
    case 'lunch':
      return '점심';
    case 'dinner':
      return '저녁';
    case 'snack':
      return '간식';
    default:
      return 'breakfast';
  }
}
