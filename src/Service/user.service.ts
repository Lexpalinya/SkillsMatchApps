import {useEffect, useState} from 'react';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateMutation,
  useUpdateProfileMutation,
  useUpdateBackgroundMutation,
} from '../Store/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Router/RootNavigation';
import Toast from 'react-native-toast-message';
import {
  clearAllDataFromLocalStorage,
  saveUserDataToLocalStorage,
} from '../helpers';

import {useDispatch, useSelector} from 'react-redux';
import {
  setUserProfile,
  updateUserProfile,
  UserProfile,
} from '../Store/userSlice';

import {OptionsCommon} from 'react-native-image-picker';
import {ExtractChangeData} from '../Utils/ExtractChangeData';

export const userService = () => {
  const userProfile = useSelector((state: any) => state.user);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
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
        dispatch(setUserProfile(res.data.data));
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
        dispatch(setUserProfile(res.data.data));
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

  const updateProfile = () => {
    const [update, {isLoading: isUpdateLoading, error: updateError}] =
      useUpdateMutation();
    const [loadingStates, setLoadingStates] = useState({
      isProfileLoading: false,
      isBackgroundLoading: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState({
      phoneNumber: '',
      username: '',
      email: '',
    });

    useEffect(() => {
      handleError(updateError);
      setIsLoading(
        isUpdateLoading ||
          loadingStates.isProfileLoading ||
          loadingStates.isBackgroundLoading,
      );
    }, [updateError, isUpdateLoading, loadingStates]);

    const handleError = (error: any) => {
      setErrorText({username: '', email: '', phoneNumber: ''});

      if (error?.data?.message === 'User already exists with email') {
        setErrorText(prev => ({...prev, email: 'ອີເມວນີ້ໄດ້ຖືກໃຊ້ງານແລ້ວ'}));
      }
      if (error?.data?.message === 'User already exists with phoneNumber') {
        setErrorText(prev => ({
          ...prev,
          phoneNumber: 'ເບີນີ້ໄດ້ຖືກໃຊ້ງານແລ້ວ',
        }));
      }
      if (error?.data?.message === 'User already exists with username') {
        setErrorText(prev => ({...prev, username: 'ຊື່ນີ້ໄດ້ຖືກໃຊ້ງານແລ້ວ'}));
      }
    };

    const uploadImage = async (image: any, type: 'profile' | 'blackground') => {
      const formData = new FormData();
      formData.append('img', {
        uri: image.uri,
        name: image.name || 'upload.jpg',
        type: image.type || 'image/jpeg',
      });

      setLoadingStates(prev => ({
        ...prev,
        [`is${capitalizeFirstLetter(type)}Loading`]: true,
      }));

      try {
        const response = await fetch(
          `http://10.0.2.2:3000/api/v1/users/${type}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          },
        );

        const data = await response.json();
        console.log('first', data);
        Toast.show({
          type: 'success',
          text1: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ',
          text2: type === 'profile' ? 'ຮູບໂປຼຟາຍ' : 'ຮູບພື້ນຫຼັງ',
        });
        return data.data;
      } catch (error) {
        console.error(`${type} Upload failed:`, error);
      } finally {
        setLoadingStates(prev => ({
          ...prev,
          [`is${capitalizeFirstLetter(type)}Loading`]: false,
        }));
      }
    };

    const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleSubmitUpdate = async (values: {
      email?: string;
      phoneNumber?: string;
      username?: string;
      profile?: any | null;
      blackground?: any | null;
    }) => {
      const changedData: Omit<
        Partial<UserProfile>,
        'profile' | 'blackground'
      > & {
        profile?: any | null;
        blackground?: any | null;
      } = ExtractChangeData(values, userProfile);

      if (Object.keys(changedData).length === 0) {
        return;
      }

      if (changedData.profile) {
        const data = await uploadImage(changedData.profile, 'profile');
        dispatch(updateUserProfile({profile: data.profile}));
      }

      if (changedData.blackground) {
        const data = await uploadImage(changedData.blackground, 'blackground');
        dispatch(updateUserProfile({blackground: data.blackground}));
      }

      delete changedData.blackground;
      delete changedData.profile;

      if (Object.keys(changedData).length > 0) {
        const res: any = await update(changedData).unwrap();

        if (res?.data) {
          dispatch(updateUserProfile(res.data));
          await saveUserDataToLocalStorage(userProfile);
          Toast.show({
            type: 'success',
            text1: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ',
          });
        }
      }
      await saveUserDataToLocalStorage(userProfile);
    };
    return {
      handleSubmitUpdate,
      errorText,
      isLoading,
    };
  };

  return {
    useUserLogin,
    useUserRegister,
    useUserLogOut,
    updateProfile,
  };
};
