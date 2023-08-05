import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootParamList } from './Models';
import { HomeScreen } from '~/screens/Home';

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
