import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import CustomInputAuth from '../../../../Utils/components/CustomInput';
import CustomButton from '../../../../Utils/components/CustomButton';

import {userService} from '../../../../Service/user.service';
import {
  IconamoonEdit,
  MdiLightEye,
  PhEyeSlashLight,
} from '../../../../../assets/Icon';

const LogInForm = () => {
  const {errorText, handleLoginSubmit, isLoading} =
    userService().useUserLogin();
  const [hidePassword, setHidePassword] = useState(true);
  const validationSchemaLogin = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^20\d{8}$/, 'ເບີໂທຕ້ອງຂື້ນຕົ້ນດ້ວຍ 20 ແລະມີ 8 ຕົວເລກ')
      .required('ກະລຸນາໃສ່ເບີໂທ'),
    password: Yup.string()
      .min(6, 'ລະຫັດຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວ')
      .required('ກະລຸນາໃສ່ລະຫັດ'),
  });

  return (
    <Formik
      initialValues={{phoneNumber: '2028490166', password: '123456'}}
      validationSchema={validationSchemaLogin}
      onSubmit={handleLoginSubmit}>
      {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
        <View style={styles.container}>
          <CustomInputAuth
            label="ເບີໂທ"
            placeholder="20XXXXXXXX"
            value={values.phoneNumber}
            onBlur={handleBlur('phoneNumber')}
            onChangeText={handleChange('phoneNumber')}
            error={errorText.phoneNumber}
            touched={Boolean(touched.phoneNumber)}
            helperText={errors.phoneNumber}
          />
          <CustomInputAuth
            label="ລະຫັດຜ່ານ"
            placeholder="XXXXXX"
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            error={errorText.password}
            touched={Boolean(touched.password)}
            helperText={errors.password}
            secureTextEntry={hidePassword}
            rightIcon={
              <TouchableOpacity
                style={{marginBottom: 0}}
                onPress={() => setHidePassword(!hidePassword)}>
                {hidePassword ? (
                  <MdiLightEye />
                ) : (
                  <PhEyeSlashLight width={24} height={24} />
                )}
              </TouchableOpacity>
            }
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
