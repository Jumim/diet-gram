import axios from 'axios';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://openapi.foodsafetykorea.go.kr';

interface pageDataType {
  startPage: number
  endPage: number
}

export const getFoodList = async (pageData: pageDataType, selectText: string) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const api = `/api/${api_key}/I2790/json/${pageData.startPage}/${pageData.endPage}/DESC_KOR=${selectText}`;
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
    Accept: 'application/json; charset=UTF-8'
  }

  var data = {
    foodData: [],
    code: ''
  };

  await axios.get(api, {headers})
    .then((res) => {
      if(res.data?.I2790?.RESULT?.CODE === 'INFO-000') {
        data = {
          foodData: res.data.I2790.row,
          code: res.data?.I2790?.RESULT?.CODE
        }
      } else {
        data = {
          ...data,
          code: res.data?.I2790?.RESULT?.CODE
        }
      }
    })

    return data;
}
