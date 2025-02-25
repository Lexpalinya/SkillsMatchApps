import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Router/RootNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';

export const useLogout = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [alertVisible, setAlertVisible] = useState(false);

  const showLogoutAlert = () => setAlertVisible(true);
  const hideLogoutAlert = () => setAlertVisible(false);

  const confirmLogout = () => {
    setAlertVisible(false);
    navigation.reset({index: 0, routes: [{name: 'LoginPage'}]});
  };

  return {
    alertVisible,
    showLogoutAlert,
    hideLogoutAlert,
    confirmLogout,
    navigation,
  };
};
