import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../../../../../Constants/color';
import {
  CuidaLogoutOutline,
  LsiconSettingOutline,
  SolarAltArrowRightLineDuotone,
  SolarUserCheckLinear,
} from '../../../../../../assets/Icon';
import {SvgProps} from 'react-native-svg';

import {RootStackParamList} from '../../../../../Router/RootNavigation';
import CustomAlert from '../../../../../Utils/components/CustomAlert';
import {userService} from '../../../../../Service/user.service';

const theme = 'light';
interface menuProps {
  title: string;
  icon: React.ComponentType;
  route: keyof RootStackParamList;
}
const menu: menuProps[] = [
  {title: 'ຢືນຢັນຂໍ້ມູນອົງກອນ', icon: SolarUserCheckLinear, route: 'KycPage'},
  {title: 'ຕັ້ງຄ່າ', icon: LsiconSettingOutline, route: 'SettingPage'},
  {title: 'ອອກຈາກລະບົບ', icon: CuidaLogoutOutline, route: 'LoginPage'},
];
const Setting = () => {
  const {
    alertVisible,
    confirmLogout,
    hideLogoutAlert,
    navigation,
    showLogoutAlert,
  } = userService().userLogOut();
  const onPress = (index: number, item: menuProps) => {
    if (index === menu.length - 1) {
      showLogoutAlert();
    } else {
      navigation.navigate(item.route);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color[theme].backgroundPage,
      }}>
      {menu.map((item, index) => {
        const Icon: React.ComponentType<SvgProps> = item.icon;
        return (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onPress(index, item)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon width={24} height={24} />
              <Text style={styles.text} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
            <SolarAltArrowRightLineDuotone />
          </TouchableOpacity>
        );
      })}

      <CustomAlert
        visible={alertVisible}
        title="ອອກຈາກລະບົບ"
        message="ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການອອກ?"
        onCancel={hideLogoutAlert}
        onConfirm={confirmLogout}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 20,
  },
});
