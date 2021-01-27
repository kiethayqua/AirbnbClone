import React from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
