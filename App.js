import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import MainStack from './App/Screens/Layout/MainStack';
import store from './App/Store';

LogBox.ignoreAllLogs();

function App() {

  let persistor = persistStore(store);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  )
}

export default App