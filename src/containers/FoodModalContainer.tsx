import { useEffect, useState, useCallback } from 'react';
import { getFoodList } from 'config/foodList';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setFoodModal, setFoodList } from 'store/modules';
import { FoodModal } from 'components';
import { FoodListType, FoodSearchFormType } from 'types';

export const FoodModalContainer = () => {
  let pageData = {
    startPage: 1,
    endPage: 10
  };
  const [foodData, setFoodData] = useState<FoodListType[]>([]);
  const [code, setCode] = useState('');
  const [searchText, setSearchText] = useState('');
  const [inView, setInView] = useState(false);
  const { register, handleSubmit, resetField } = useForm<FoodSearchFormType>();
  const dispatch = useDispatch();
  const foodModal = useSelector((state: RootState) => state.foodModal);

  useEffect(() => {
    if (inView) {
      incrementPageData();
      getFoodListApi(searchText);
    }
    // eslint-disable-next-line
  }, [inView]);

  const onSubmit: SubmitHandler<FoodSearchFormType> = (data) => {
    if (data.selectText === '' || data.selectText === undefined) {
      alert('검색어를 입력해주세요.');
    } else {
      // 재검색하면 페이지 데이터 초기화 후, 검색
      pageData = {
        startPage: 1,
        endPage: 10
      };

      setFoodData([]);
      getFoodListApi(data.selectText);
    }
  }

  const handleModal = () => {
    dispatch(setFoodModal(false));
    setFoodData([]);
    resetField('selectText');
  }

  const foodListAdd = (foodData: FoodListType) => {
    dispatch(setFoodList(foodData));
    handleModal();
  }

  const incrementPageData = () => {
    pageData = {
      startPage: pageData.startPage + 10,
      endPage: pageData.endPage + 10
    };
  }

  const getFoodListApi = useCallback(async (text: string) => {
    const getList = await getFoodList(pageData, text);

    console.log(getList);

    if (searchText === text && pageData.startPage > 1) {
      setFoodData(foodData.concat(getList.foodData));
    } else {
      setFoodData(getList.foodData);
    }

    setCode(getList.code);
    setSearchText(text);
    // eslint-disable-next-line
  }, [pageData]);

  return (
    <>
      {
        foodModal &&
        <FoodModal
          handleModal={handleModal}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          code={code}
          foodData={foodData}
          foodListAdd={foodListAdd}
          inView={inView}
          setInView={setInView}
        />
      }
    </>
  )
}
