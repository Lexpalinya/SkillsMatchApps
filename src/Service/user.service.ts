import {useEffect, useState} from 'react';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from '../Store/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Router/RootNavigation';
import Toast from 'react-native-toast-message';
import {
  clearAllDataFromLocalStorage,
  getUserDataFromLocalStorage,
  saveUserDataToLocalStorage,
} from '../helpers';
import {StackNavigationProp} from '@react-navigation/stack';

export const userService = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useUserLogin = () => {
    const [login, {isLoading, error}] = useLoginMutation();
    const [errorText, setErrorText] = useState({
      phoneNumber: '',
      password: '',
    });

    useEffect(() => {
      if (error) {
        handleError(error);
      }
    }, [error]);
    const handleError = (errors: any) => {
      setErrorText({password: '', phoneNumber: ''});
      if (errors.data?.message === 'Resource not found user') {
        setErrorText(prev => ({...prev, phoneNumber: 'ບໍ່ພົບບັນຊີຂອງທ່ານ'}));
      }
      if (errors.data?.message === 'Login failed :password not match') {
        setErrorText(prev => ({
          ...prev,
          password: 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ',
        }));
      }
      Toast.show({
        type: 'error',
        text1: 'ເຂົ້າສູ່ລະບົບຜິດພາດ',
        text2: errorText.phoneNumber
          ? 'ບໍ່ພົບບັນຊີຂອງທ່ານ'
          : 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ',
      });
    };
    const handleLoginSubmit = async (values: {
      phoneNumber: string;
      password: string;
    }) => {
      const res: any = await login(values);

      if (res.data?.status === true) {
        await saveUserDataToLocalStorage(res.data.data);
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      }
    };
    return {
      handleLoginSubmit,
      isLoading,
      errorText,
    };
  };
  const useUserRegister = () => {
    const [register, {isLoading, error}] = useRegisterMutation();
    const [showAlert, setShowAlert] = useState(false);
    const [errorText, setErrorText] = useState({
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      role: '',
    });
    useEffect(() => {
      if (error) {
        handleError(error);
      }
    }, [error]);
    const handleError = (error: any) => {
      setErrorText({
        username: '',
        phoneNumber: '',
        password: '',
        role: '',
        email: '',
      });
      if (error.data.message === 'User already exists with phoneNumber') {
        setErrorText(prev => ({
          ...prev,
          phoneNumber: 'ເບີນີ້ໄດ້ຖືກນຳໃຊ້ໄປແລ້ວ',
        }));
      }
      if (error.data.message === 'User already exists with email') {
        setErrorText(prev => ({
          ...prev,
          email: 'ອີເມວໄດ້ຖືກນຳໃຊ້ໄປແລ້ວ',
        }));
      }
      if (error.data.message === 'User already exists with username') {
        setErrorText(prev => ({
          ...prev,
          username: 'ຊື່ຜູ້ໃຊ້ໄດ້ຖືກນຳໃຊ້ໄປແລ້ວ',
        }));
      }
      Toast.show({
        type: 'error',
        text1: 'ເຂົ້າສູ່ລະບົບຜິດພາດ',
        text2: 'ກະລຸນາກວດສອບຄືນ',
      });
    };
    const handleRegisterSubmit = async (values: {
      username?: string;
      phoneNumber: string;
      password: string;
      role: string;
      email: string;
    }) => {
      console.log('values.role', values.role);
      if (values.role !== 'company') {
        delete values.username;
      }
      console.log('values', values);
      const res: any = await register(values);
      console.log(res);
      if (res.data?.status === true) {
        await saveUserDataToLocalStorage(res.data.data);
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      }
    };

    return {
      handleRegisterSubmit,
      isLoading,
      errorText,
      showAlert,
      setShowAlert,
    };
  };
  const useUserLogOut = () => {
    const [logout, {isLoading, error}] = useLogoutMutation();
    const [alertVisible, setAlertVisible] = useState(false);

    const handleLogout = async () => {
      try {
        const res = await logout({}).unwrap();
        if (res.message === 'Logout successful') {
          setAlertVisible(false);
          navigation.reset({index: 0, routes: [{name: 'LoginPage'}]});
          await clearAllDataFromLocalStorage();
        }
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    const showLogoutAlert = () => setAlertVisible(true);
    const hideLogoutAlert = () => setAlertVisible(false);
    const confirmLogout = () => handleLogout();

    return {
      alertVisible,

      showLogoutAlert,
      hideLogoutAlert,
      confirmLogout,
      isLoading,
      navigation,
      error,
    };
  };
  return {
    useUserLogin,
    useUserRegister,
    useUserLogOut,
  };
};
