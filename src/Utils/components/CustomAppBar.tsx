import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {SvgProps} from 'react-native-svg';
import {MaterialSymbolsArrowBackIosRounded} from '../../../assets/Icon';
import {RootStackParamList} from '../../router/RootNavigation';
import color from '../../Constants/color';
const theme = 'light';

interface CustomAppBarProps {
  title?: string;
  Icon?: React.ComponentType<SvgProps>;
}
const CustomAppBar: React.FC<CustomAppBarProps> = ({
  title = 'ນັກລ່າຄວາມຝັນ',
  Icon = MaterialSymbolsArrowBackIosRounded,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {Icon && (
        <TouchableOpacity
          onPress={() => handleBack()}
          style={styles.iconContainer}>
          <Icon width={30} height={30} color={color[theme].backgroundPage} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: color[theme].primary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    color: color[theme].backgroundPage,
    fontSize: 20,
    fontWeight: 800,
    flex: 1,
    textAlign: 'center',
  },
});
