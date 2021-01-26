import React from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
