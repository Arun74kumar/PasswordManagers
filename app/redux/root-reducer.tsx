/**
 * Root Reducer
 * combine all reducers to create root reducer
 * @format
 */
import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { commonReducer } from '@app/modules/common';
import { appBootstrapReducer } from '@app/modules/app-bootstrap';

/*-----[ persist configurations ]------*/
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['commonReducer'],
};
const commonPersistConfig = {
  key: 'commonReducer',
  storage: AsyncStorage,
  blacklist: ['loaders'],
};

const appReducer = combineReducers({
  commonReducer: persistReducer(commonPersistConfig, commonReducer),
  appBootstrapReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

const persistRootReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export { persistRootReducer };
