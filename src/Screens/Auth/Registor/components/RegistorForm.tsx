import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../../../Utils/components/CustomButton';
import CustomInputAuth from '../../../../Utils/components/CustomInput';
import color from '../../../../Constants/color';
import {userService} from '../../../../Service/user.service';
import CustomAlert from '../../../../Utils/components/CustomAlert';
const theme = 'light';
const RegistorForm = () => {
  const [role, setRole] = useState('jobber');
  const isSelect = role == 'jobber';
  const {handleRegisterSubmit, errorText, isLoading, setShowAlert, showAlert} =
    userService().useUserRegister();
  const validationSchemaRegister = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^20\d{8}$/, 'ເບີໂທຕ້ອງຂື້ນຕົ້ນດ້ວຍ 20 ແລະມີ 8 ຕົວເລກ')
      .required('ກະລຸນາໃສ່ເບີໂທ'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'ອີເມວບໍ່ຖືກຕ້ອງ emilname@gmail.com',
      )
      .required('ກະລຸນາໃສ່ອີເມວ'),
    password: Yup.string()
      .min(6, 'ລະຫັດຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວ')
      .required('ກະລຸນາໃສ່ລະຫັດ'),
    confrimPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'ລະຫັດຍືນຢັນບໍ່ກົງກັບລະຫັດທີ່ໃສ່')
      .required('ກະລຸນາໃສ່ລະຫັດຍືນຢັນ'),
    role: Yup.string().required('ກະລຸນາເລືອກລະດັບບັນຊີ'),
    username: Yup.string().when('role', {
      is: 'company',
      then: schema => schema.required('ກະລຸນາໃສ່ຊື່ບໍລິສັດ'),
      otherwise: schema => schema.notRequired(),
    }),
  });
  return (
    <Formik
      validationSchema={validationSchemaRegister}
      initialValues={{
        phoneNumber: '2028490167',
        password: '123456',
        confrimPassword: '123456',
        role: 'jobber',
        username: 'test',
        email: '28490166@gmail.com',
      }}
      onSubmit={values => handleRegisterSubmit(values)}>
      {({handleBlur, handleChange, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <CustomButton
              style={[
                styles.buttomTop,
                role == 'jobber' && styles.buttomTopSelect,
              ]}
              textStyle={styles.buttomTextTop}
              title="ຜູ້ຫາວຽກ"
              onPress={() => {
                handleChange('role')('jobber');
                setRole('jobber');
              }}
            />
            <CustomButton
              style={[
                styles.buttomTop,
                role !== 'jobber' && styles.buttomTopSelect,
              ]}
              textStyle={styles.buttomTextTop}
              title="ບໍລິສັດ"
              onPress={() => {
                handleChange('role')('company');
                setRole('company');
              }}
            />
          </View>
          {!isSelect && (
            <CustomInputAuth
              containerStyle={styles.input}
              label="ຊື່ບໍລິສັດ"
              placeholder="ບໍລິສັດ XXXX"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              error={errorText.username}
              helperText={errors.username}
              touched={Boolean(touched.username)}
            />
          )}
          <CustomInputAuth
            label="ອີເມວ"
            placeholder="emailname@gmail.com"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errorText.email}
            helperText={errors.email}
            touched={Boolean(touched.email)}
          />
          <CustomInputAuth
            containerStyle={styles.input}
            label="ເບີໂທ"
            placeholder="20XXXXXXXX"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
            error={errorText.phoneNumber}
            helperText={errors.phoneNumber}
            touched={Boolean(touched.phoneNumber)}
          />
          <CustomInputAuth
            containerStyle={styles.input}
            label="ລະຫັດຜ່ານ"
            placeholder="XXXXXX"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errorText.password}
            helperText={errors.password}
            touched={Boolean(touched.password)}
            secureTextEntry={true}
          />
          <CustomInputAuth
            containerStyle={styles.input}
            label="ຢືນຢັນລະຫັດຜ່ານ"
            placeholder="XXXXXX"
            onChangeText={handleChange('confrimPassword')}
            onBlur={handleBlur('confrimPassword')}
            value={values.confrimPassword}
            // error={errors.confrimPassword}
            helperText={errors.confrimPassword}
            touched={Boolean(touched.confrimPassword)}
            secureTextEntry={true}
          />
          <CustomButton
            onPress={() => {
              setShowAlert(true);
            }}
            title={
              isLoading
                ? 'ກຳລັງລົງທະບຽນ...'
                : isSelect
                ? 'ລົງທະບຽນຫາວຽກ'
                : 'ລົງທະບຽນບໍລິສັດ'
            }
            disabled={isLoading}
          />
          <CustomAlert
            title="ຢືນຢັນການລົງທະບຽນ"
            message={
              'ທ່ານຕ້ອງການຈະສະໝັກບັນຊີ' +
              (role === 'company' ? 'ບໍລິສັດ' : 'ຜູ້ຫາວຽກ') +
              ' ແມ່ນບໍ?'
            }
            onCancel={() => {
              setShowAlert(false);
            }}
            onConfirm={() => {
              handleSubmit();
              setShowAlert(false);
            }}
            visible={showAlert}
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
