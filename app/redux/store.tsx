/**
 * Redux Store
 * create redux store with middleware,
 * enhancers & root reducer
 * configure redux persist
 * @format
 */

import {configureStore as reduxConfigureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {ENV} from '@app/configs';
import {persistRootReducer} from './root-reducer';
import {rootSaga} from './root-saga';

/*-----------[ configure store ]------------*/
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  // New middleware can be added here
  const middleware = [sagaMiddleware];

  const store = reduxConfigureStore({
    reducer: persistRootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(middleware),
    devTools: ENV === 'development',
  });

  const persistor = persistStore(store);

  // Run sagas
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
}

export {configureStore};
