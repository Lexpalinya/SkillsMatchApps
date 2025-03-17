import {StyleSheet, View} from 'react-native';
import React from 'react';
import JobberScreen from './Jobber/JobberScree';
import CompanyScreen from './Company/CompanyScreen';
import {useSelector} from 'react-redux';
const ProfilePage = () => {
  const userProfile = useSelector((state: any) => state.user);

  return (
    <View style={styles.stlyesView}>
      {userProfile.role === 'company' ? <CompanyScreen /> : <JobberScreen />}
    </View>
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
