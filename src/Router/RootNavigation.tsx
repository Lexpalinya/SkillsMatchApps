import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistorPage from '../Screens/Auth/Registor/RegistorPage';
import MainApp from '../Screens/MainApp';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../Screens/Auth/Login/LoginPage';
import PersonInfoPage from '../Screens/PersonInfo/PersonInfoPage';
import RecruitingPage from '../Screens/Recruiting/RecruitingPage';
import KycPage from '../Screens/Profile/Company/Tab/Settings/kyc/KycPage';
import SettingPage from '../Screens/Setting/SettingPage';
import FavoritePage from '../Screens/Favorite/FavoritePage';

export type RootStackParamList = {
  MainApp: undefined;
  LoginPage: undefined;
  RegistorPage: undefined;
  RecruitingPage: undefined;
  PersonInfoPage: undefined;
  FavoritePage: undefined;
  SettingPage: undefined;
  KycPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegistorPage" component={RegistorPage} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="RecruitingPage" component={RecruitingPage} />
        <Stack.Screen name="PersonInfoPage" component={PersonInfoPage} />
        <Stack.Screen name="FavoritePage" component={FavoritePage} />
        <Stack.Screen name="KycPage" component={KycPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
