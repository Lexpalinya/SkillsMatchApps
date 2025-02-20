import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import JobberScree from './Jobber/JobberScree';
import {RootStackParamList} from '../../Router/RootNavigation';
import CompanyScreen from './Company/CompanyScreen';
const role: string = 'company';
const ProfilePage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>{role === 'company' ? <CompanyScreen /> : <JobberScree />}</View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  stlyesView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
