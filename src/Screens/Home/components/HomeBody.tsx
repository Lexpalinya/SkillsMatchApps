import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';

import {TablerHome} from '../../../../assets/Icon';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../router/RootNavigation';
import color from '../../../Constants/color';

const theme = 'light';
interface MenuListProps {
  title: string;
  icon: React.ComponentType<SvgProps>;
  route: keyof RootStackParamList;
}
const MenuList: MenuListProps[] = [
  {title: 'ຮັບສະໝັກ', icon: TablerHome, route: 'RecruitingPage'},
  {title: 'ແຮງງານ', icon: TablerHome, route: 'PersonInfoPage'},
  {title: 'ລາຍການທີສົນໃຈ', icon: TablerHome, route: 'FavoritePage'},
];
const HomeBody = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {MenuList.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.menuContainer}
            onPress={() => navigation.navigate(item.route)}>
            <item.icon color={color[theme].primary} width={30} height={30} />

            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color[theme].backgroundPage,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    height: 500,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuContainer: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color[theme].containerBorder,
    paddingVertical: 10,
  },
  menuText: {
    marginTop: 8,
    textAlign: 'center',
    color: color[theme].textPrimary,
  },
});
