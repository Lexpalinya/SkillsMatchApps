import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {Formik} from 'formik';
import {RootStackParamList} from '../../../../router/RootNavigation';
import CustomButton from '../../../../Utils/components/CustomButton';
import CustomInputAuth from '../../../../Utils/components/CustomInput';
import color from '../../../../Constants/color';
const theme = 'light';
const RegistorForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [role, setRole] = useState('jobber');
  const isSelect = role == 'jobber';
  return (
    <Formik
      initialValues={{phoneNumber: '', password: ''}}
      onSubmit={value => console.log('value', value)}>
      {({}) => (
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <CustomButton
              style={[styles.buttomTop, isSelect && styles.buttomTopSelect]}
              textStyle={styles.buttomTextTop}
              title="ຜູ້ຫາວຽກ"
              onPress={() => setRole('jobber')}
            />
            <CustomButton
              style={[styles.buttomTop, !isSelect && styles.buttomTopSelect]}
              textStyle={styles.buttomTextTop}
              title="ບໍລິສັດ"
              onPress={() => setRole('company')}
            />
          </View>
          {!isSelect && (
            <CustomInputAuth
              containerStyle={styles.input}
              label="ຊື່ບໍລິສັດ"
              placeholder="ບໍລິສັດ XXXX"
            />
          )}
          <CustomInputAuth
            containerStyle={styles.input}
            label="ເບີໂທ"
            placeholder="20XXXXXXXX"
          />
          <CustomInputAuth
            containerStyle={styles.input}
            label="ລະຫັດຜ່ານ"
            placeholder="XXXXXX"
          />
          <CustomInputAuth
            containerStyle={styles.input}
            label="ລະຫັດຜ່ານ"
            placeholder="XXXXXX"
          />
          <CustomButton
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'MainApp'}],
              });
            }}
            title={isSelect ? 'ລົງທະບຽນຫາວຽກ' : 'ລົງທະບຽນບໍລິສັດ'}
          />
        </View>
      )}
    </Formik>
  );
};

export default RegistorForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
  },
  containerTop: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttomTop: {
    borderRadius: 0,
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
    elevation: 0,
    width: '100%',
    paddingBottom: 8,
  },
  buttomTextTop: {
    color: color[theme].textPrimary,
  },
  buttomTopSelect: {
    borderBottomWidth: 2,
    borderBottomColor: color[theme].textPrimary,
  },
  input: {
    marginBottom: 10,
  },
});
