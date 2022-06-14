import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const WriteFormContainer = ({ originalData, isEdit }: WriteFormContainerType) => {
  const { register, handleSubmit } = useForm<WriteFormType>();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const newId = useRef(0);

  const date = useSelector((state: RootState) => state.date);
  const foodList = useSelector((state: RootState) => state.foodList);
  const localData = useSelector((state: RootState) => state.diary);

  useEffect(() => {
    if (isEdit) {
      newId.current = originalData!.id;
      //dispatch(initFoodList(originalData!.food));
    } else {
      if (Object.keys(localData).length !== 0) {
        newId.current = localData[0].id + 1;
      }
    }
    // eslint-disable-next-line
  }, [isEdit]);

  const onSubmit: SubmitHandler<WriteFormType> = (data) => {

    if(foodList.length === 0) {
      alert('음식을 한 개 이상 추가해주세요.');
    } else {
      const totalInfo = totalCalInfo(foodList);

      const diaryItem = {
        ...data,
        id: newId.current,
        food: foodList,
        totalCal: totalInfo[0],
        totalCarbs: totalInfo[1],
        totalProtain: totalInfo[2],
        totalFat: totalInfo[3]
      };

      console.log('diaryItem >> ' +diaryItem);

      if (isEdit) {
        //dispatch(editDiaryList(diaryItem));
      } else {
        //dispatch(setDiaryList(diaryItem));
        newId.current += 1;
      }

      navi('/', { replace: true });
    }
  }

  return (
    <WriteForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      date={date}
      sortList={sortList}
      foodList={foodList}
      handleRemoveFoodList={(foodData: FoodListType) => dispatch(removeFoodList(foodData.NUM))}
      handleFoodModal={() => dispatch(setFoodModal(true))}
      sortValue={isEdit ? originalData ?.sort : 'breakfast'}
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
