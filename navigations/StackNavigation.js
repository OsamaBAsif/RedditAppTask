import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../util/routes';
import PostsScreen from '../screens/PostsScreen';
import DetailsScreen from '../screens/DetailsScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.postsScreen.routeName}>
      <Stack.Screen
        name={routes.postsScreen.routeName}
        component={PostsScreen}
      />
      <Stack.Screen
        name={routes.detailsScreen.routeName}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
