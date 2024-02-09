/*** 
╔═══╗╔╗────────╔═══╦╗─────────╔╗
║╔═╗╠╝╚╗───────║╔═╗║║─────────║║
║╚══╬╗╔╬══╦╗─╔╗║║─║║╚═╦══╦══╦═╝║
╚══╗║║║║╔╗║║─║║║╚═╝║╔╗║║═╣╔╗║╔╗║
║╚═╝║║╚╣╔╗║╚═╝║║╔═╗║║║║║═╣╔╗║╚╝║
╚═══╝╚═╩╝╚╩═╗╔╝╚╝─╚╩╝╚╩══╩╝╚╩══╝
──────────╔═╝║
──────────╚══╝
 * Initialize redux store, routes, configs
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Navigator } from '@app/navigator';
import { configureStore } from '@app/redux';

const { store, persistor } = configureStore();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Main = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {restored => <Navigator restored={restored} />}
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export { Main, store };
