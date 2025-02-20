import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import RegistorTittle from './components/RegistorTittle';
import RegistorForm from './components/RegistorForm';
import RegistorBottom from './components/RegistorBottom';
import color from '../../../Constants/color';

const theme = 'light';
const RegistorPage = () => {
  return (
    <ScrollView style={{backgroundColor: color[theme].backgroundPage}}>
      <View style={styles.stlyesView}>
        <RegistorTittle />
        <RegistorForm />
        <RegistorBottom />
      </View>
    </ScrollView>
  );
};

export default RegistorPage;
const styles = StyleSheet.create({
  stlyesView: {
    paddingVertical: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color[theme].backgroundPage,
  },
});
