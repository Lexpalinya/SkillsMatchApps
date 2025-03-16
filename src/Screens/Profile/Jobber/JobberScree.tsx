import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomImage from '../../../Utils/components/CustomImage';
import color from '../../../Constants/color';
import {Text} from 'react-native-gesture-handler';
import CustomButton from '../../../Utils/components/CustomButton';
import {
  CuidaLogoutOutline,
  FluentPerson20Regular,
  LsiconSettingOutline,
  SolarAltArrowRightLineDuotone,
  SolarUserCheckLinear,
} from '../../../../assets/Icon';
import {RootStackParamList} from '../../../Router/RootNavigation';

import {SvgProps} from 'react-native-svg';

import CustomAlert from '../../../Utils/components/CustomAlert';
import {userService} from '../../../Service/user.service';

const theme = 'light';
interface menuProps {
  title: string;
  icon: React.ComponentType;
  route: keyof RootStackParamList;
}
const menu: menuProps[] = [
  {
    title: 'ຂໍູ້ມູນສ່ວນຕົວ ແລະ ການຢືນຢັນຕົວຕົນ',
    icon: FluentPerson20Regular,
    route: 'KycPage',
  },
  {
    title: 'ການສຶກສາ,ຄວາມສາມາດແລະອື່ນໆ',
    icon: SolarUserCheckLinear,
    route: 'KycPage',
  },
  {title: 'ຕັ້ງຄ່າ', icon: LsiconSettingOutline, route: 'SettingPage'},
  {title: 'ອອກຈາກລະບົບ', icon: CuidaLogoutOutline, route: 'LoginPage'},
];
const JobberScreen = () => {
  const {
    alertVisible,
    confirmLogout,
    hideLogoutAlert,
    navigation,
    showLogoutAlert,
  } = userService().useUserLogOut();

  const OnPress = (index: number, item: menuProps) => {
    if (index === menu.length - 1) {
      showLogoutAlert();
    } else {
      navigation.navigate(item.route);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomImage
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          style={styles.backgroundImage}
        />
        <CustomImage
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          style={styles.profile}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TSET-83484,25</Text>
          <CustomButton
            onPress={() => {}}
            title="ຢືນຢັນຕົວຕົນແລ້ວ"
            style={styles.buttonKyc}
            textStyle={styles.textButtonKyc}
            icon={
              <SolarUserCheckLinear
                color={color[theme].primary}
                width={20}
                height={20}
              />
            }
          />
        </View>
      </View>

      {menu.map((item, index) => {
        const Icon: React.ComponentType<SvgProps> = item.icon;
        return (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => OnPress(index, item)}>
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

      {/* Custom Alert for Logout */}
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

export default JobberScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color[theme].backgroundPage,
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: color[theme].backgroundPage,
  },
  backgroundImage: {
    width: '100%',
    height: 130,
    borderRadius: 0,
  },
  profile: {
    position: 'absolute',
    top: -75,
    left: -60,
    width: 120,
    height: 120,
    marginHorizontal: '50%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: color[theme].backgroundPage,
    elevation: 5,
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  textButtonKyc: {
    color: color[theme].textSecondary,
    fontWeight: 'bold',
    padding: 0,
  },
  buttonKyc: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color[theme].primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
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
