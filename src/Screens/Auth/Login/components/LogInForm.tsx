import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import CustomInputAuth from '../../../../Utils/components/CustomInput';
import CustomButton from '../../../../Utils/components/CustomButton';
import {RootStackParamList} from '../../../../router/RootNavigation';
import {useLoginMutation} from '../../../../Store/auth';

// Validation Schema
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(
    /^20\d{8}$/,
    'ເບີໂທລະສັບຂື້ນຕົ້ນ 20 ແລະ 8 ຕົວເລກ',
  ),
  password: Yup.string().min(6, 'ລະຫັດຜ່ານຕ້ອງມີຢ່າງໜ່ອຍ 6 ໂຕອັກສອນ'),
});

const LogInForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [login, {isLoading}] = useLoginMutation();
  const [errorText, setErrorText] = useState({phoneNumber: '', password: ''});

  const handleLogin = async (values: {
    phoneNumber: string;
    password: string;
  }) => {
    try {
      const response: any = await login(values);
      if (response.data?.status === true) {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      } else if (response.error) {
        handleLoginError(response.error.data.message);
      }
    } catch (err) {
      Alert.alert('ເຂົ້າສູ່ລະບົບ', 'ກະລຸນາເຂົ້າສູ່ລະບົບໃນພາຍຫຼັງ');
    }
  };

  const handleLoginError = (message: string) => {
    console.log('message', message);
    setErrorText({phoneNumber: '', password: ''});
    if (message === 'Resource not found user') {
      setErrorText(prev => ({...prev, phoneNumber: 'ບໍ່ພົບຜູ້ໃຊ້ນີ້'}));
    } else if (message === 'Login failed :password not match') {
      setErrorText(prev => ({...prev, password: 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ'}));
    }
  };

  return (
    <Formik
      initialValues={{phoneNumber: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleLogin(values);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <CustomInputAuth
            label="ເບີໂທ"
            placeholder="20XXXXXXXX"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
            error={errorText.phoneNumber}
            touched={touched.phoneNumber || Boolean(errorText.phoneNumber)}
            helperText={errors.phoneNumber}
          />
          <CustomInputAuth
            label="ລະຫັດຜ່ານ"
            placeholder="XXXXXX"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errorText.password}
            touched={touched.password || Boolean(errorText.password)}
            helperText={errors.password}
            secureTextEntry
          />
          <CustomButton
            onPress={() => handleSubmit()}
            title={isLoading ? 'ກຳລັງເຂົ້າສູ່ລະບົບ...' : 'ເຂົ້າສູ່ລະບົບ'}
            disabled={isLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
  },
});
