import 'react-native-gesture-handler'; // luon import o top
import React from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import Router from './src/navigation/Router';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
