import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResultsScreen from '../screens/SearchResults';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsScreen}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
