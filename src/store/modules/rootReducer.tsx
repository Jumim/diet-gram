/* root reducer
    - 여러 reducer를 사용하는 경우 하나의 reducer로 묶어주는 메소드
*/

import {combineReducers} from 'redux';

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import date from './date';
import auth from './auth';
import user from './user';
import diary from './diary';
import foodList from './foodList';

import userModal from './userModal';
import foodModal from './foodModal';

const persistConfig = {
  key: 'root',
  storage,  // localStorage에 저장
  whitelist: []   //user, diary reducer만 저장
  // blacklist
};

const rootReducer = combineReducers({
  date,
  auth,
  user,
  userModal,
  foodModal,
  diary,
  foodList,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
