import React, { useEffect, useState } from 'react';
import { ActivityIndicator, LogBox, View } from 'react-native';
import { Provider } from "react-redux";
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import MainStack from './App/Screens/Layout/MainStack';
import store from './App/Store';
import FlashMessage from "react-native-flash-message";
import { useGlobalContext, StorageManager, AppProvider } from './App/Services2'

LogBox.ignoreAllLogs();

function App() {

  let persistor = persistStore(store);


  return (
    <AppProvider>
      <Provider {...{ store }}>
        <FlashMessage position="top" />
        <PersistGate loading={null} persistor={persistor}>
          <MainStack />
        </PersistGate>
      </Provider>
    </AppProvider>
  )
}

export default App