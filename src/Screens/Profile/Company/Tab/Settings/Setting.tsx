import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../../../../../Constants/color';
import {
  LsiconSettingOutline,
  SolarAltArrowRightLineDuotone,
  SolarUserCheckLinear,
} from '../../../../../../assets/Icon';
import {SvgProps} from 'react-native-svg';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../Router/RootNavigation';
const theme = 'light';
interface menuProps {
  title: string;
  icon: React.ComponentType;
  route: keyof RootStackParamList;
}
const menu: menuProps[] = [
  {title: 'ຢືນຢັນຂໍ້ມູນອົງກອນ', icon: SolarUserCheckLinear, route: 'KycPage'},
  {title: 'ຕັ້ງຄ່າ', icon: LsiconSettingOutline, route: 'SettingPage'},
];
const Setting = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
            onPress={() => navigation.navigate(item.route)}>
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
