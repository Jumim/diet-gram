import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/rootReducer';
import { setFoodModal, removeFoodList } from 'store/modules';
import { WriteFormType, FoodListType, DiaryListType } from 'types';
import { WriteForm } from 'components';

interface WriteFormContainerType {
  originalData?: DiaryListType
  isEdit?: boolean
}

export const WriteFormContainer = ({ isEdit }: WriteFormContainerType) => {
  const { register, handleSubmit } = useForm<WriteFormType>();

  const navi = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();
  const foodList = useSelector((state: RootState) => state.foodList);

  const onSubmit: SubmitHandler<WriteFormType> = (data) => {
    if(foodList.length === 0) {
      alert('음식을 한 개 이상 추가해주세요.');
    } else {
      const totalInfo = totalCalInfo(foodList);

      const diaryItem = {
        ...data,
        food: foodList,
        totalCal: totalInfo[0],
        totalCarbs: totalInfo[1],
        totalProtain: totalInfo[2],
        totalFat: totalInfo[3]
      };

      console.log('diaryItem >> ' +JSON.stringify(diaryItem));

      if (isEdit) {
        // 수정
        //dispatch(editDiaryList(diaryItem));
      } else {
        // 추가
        //dispatch(setDiaryList(diaryItem));
      }

      navi('/', { replace: true });
    }
  }

  return (
    <WriteForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      date={params.date}
      sortList={sortList}
      foodList={foodList}
      handleRemoveFoodList={(foodData: FoodListType) => dispatch(removeFoodList(foodData.NUM))}
      handleFoodModal={() => dispatch(setFoodModal(true))}
      sortValue={params.sort}
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

const sortList = [
  { name: '아침', value: 'breakfast' },
  { name: '점심', value: 'lunch' },
  { name: '저녁', value: 'dinner' },
  { name: '간식', value: 'snack' }
];
