import React from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
