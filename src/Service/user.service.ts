import {useEffect, useState} from 'react';
import {useLoginMutation} from '../Store/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Router/RootNavigation';
import Toast from 'react-native-toast-message';
import {
  getUserDataFromLocalStorage,
  saveUserDataToLocalStorage,
} from '../helpers';

export const userService = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userLogin = () => {
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
  const userRegister = () => {};
  return {
    userLogin,
    userRegister,
  };
};
