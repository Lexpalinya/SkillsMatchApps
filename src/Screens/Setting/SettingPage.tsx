import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomAppBar from '../../Utils/components/CustomAppBar';
import color from '../../Constants/color';
import {blackgroundProfileUrl, profileUrl} from '../../Configs/config';
import {useSelector} from 'react-redux';
import {EditableImage} from './components';
import CustomInputAuth from '../../Utils/components/CustomInput';
import {Formik} from 'formik';
import CustomButton from '../../Utils/components/CustomButton';
import {userService} from '../../Service/user.service';
import * as Yup from 'yup';
const theme = 'light';

const SettingPage = () => {
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^20\d{8}$/, 'ເບີໂທຕ້ອງຂື້ນຕ້ນດ້ວຍ 20 ແລະມີ 8 ຕົວເລກ')
      .required('ກະລຸນາໃສ່ເບີໂທ'),
    email: Yup.string().matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'ອີເມວບໍ່ຖືກຕ້ອງ emilname@gmail.com',
    ),
    username: Yup.string().required('ກະລຸນາປ້ອນຊື່ຂອງທ່ານ'),
    profile: Yup.mixed()
      .test('is-string-or-object', 'Invalid profile image', (value: any) => {
        if (typeof value === 'string') {
          return true; // ✅ ถ้าเป็น string (URL) ให้ผ่าน
        }
        if (typeof value === 'object' && value !== null) {
          return (
            typeof value.uri === 'string' &&
            typeof value.type === 'string' &&
            typeof value.name === 'string'
          ); // ✅ ถ้าเป็น object และมี `uri`, `type`, `name` ให้ผ่าน
        }
        return false; // ❌ ถ้าไม่ใช่ทั้ง string และ object ให้ error
      })
      .required('Profile image is required'),
    blackground: Yup.mixed()
      .test('is-string-or-object', 'Invalid background image', (value: any) => {
        if (typeof value === 'string') {
          return true; // ✅ ถ้าเป็น string (URL) ให้ผ่าน
        }
        if (typeof value === 'object' && value !== null) {
          return (
            typeof value.uri === 'string' &&
            typeof value.type === 'string' &&
            typeof value.name === 'string'
          ); // ✅ ถ้าเป็น object และมี `uri`, `type`, `name` ให้ผ่าน
        }
        return false; // ❌ ถ้าไม่ใช่ทั้ง string และ object ให้ error
      })
      .required('Background image is required'),
  });

  const userProfile = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log('User profile updated:', userProfile);
  }, [userProfile]);
  const {handleSubmitUpdate, isLoading, errorText} =
    userService().updateProfile();
  return (
    <Formik
      initialValues={{
        username: userProfile.username,
        email: userProfile.email,
        phoneNumber: userProfile.phoneNumber,
        profile: userProfile.profile,
        blackground: userProfile.blackground,
      }}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmitUpdate(values);
      }}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        setFieldValue,
        values,
        errors,
        touched,
      }) => {
        return (
          <ScrollView style={styles.body}>
            <CustomAppBar title="ຕັ້ງຄ່າ" />
            <View style={styles.header}>
              <EditableImage
                uri={values.blackground ?? blackgroundProfileUrl}
                type="blackground"
                onDataChange={(value: any) =>
                  setFieldValue('blackground', value)
                }
              />
              <EditableImage
                uri={values.profile ?? profileUrl}
                type="profile"
                onDataChange={(value: any) => setFieldValue('profile', value)} // ใช้ setFieldValue
              />
            </View>
            <View style={styles.containerInput}>
              <CustomInputAuth
                label="ຊື່ອົງກອນ"
                placeholder="XXXXXX"
                value={values.username}
                onBlur={handleBlur('username')}
                onChangeText={handleChange('username')}
                error={errorText.username}
                helperText={errors.username as string}
                touched={Boolean(touched.username)}
              />
              <CustomInputAuth
                label="ອີເມວ"
                placeholder="emailname@gmail.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errorText.email}
                helperText={errors.email as string}
                touched={Boolean(touched.email)}
              />
              <CustomInputAuth
                label="ເບີໂທ"
                placeholder="XXXXXX"
                value={values.phoneNumber}
                onBlur={handleBlur('phoneNumber')}
                onChangeText={handleChange('phoneNumber')}
                error={errorText.phoneNumber}
                touched={Boolean(touched.phoneNumber)}
                helperText={errors.phoneNumber as string}
              />
              <CustomButton
                title={isLoading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ'}
                onPress={() => handleSubmit()}
                style={styles.button}
                disabled={isLoading}
              />
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  body: {
    backgroundColor: color[theme].backgroundPage,
    height: '100%',
  },
  header: {
    backgroundColor: color[theme].backgroundPage,
    alignItems: 'center',
    borderRadius: 0,
  },
  backgroundContainer: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: 130,
    borderRadius: 0,
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{translateX: -60}],
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: color[theme].backgroundPage,
  },
  button: {
    marginTop: 80,
  },
  containerInput: {
    marginTop: 50,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
