import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../router/RootNavigation';
import CustomButton from '../../../../Utils/components/CustomButton';
import color from '../../../../Constants/color';

const theme = 'light';
const RegistorBottom = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ມີບັນຊີຢູ່ແລ້ວ</Text>
      <CustomButton
        style={styles.buttom}
        textStyle={styles.buttomText}
        title="ເຂົ້າສູ່ລະບົບ"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default RegistorBottom;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: color[theme].textPrimary,
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  buttomText: {
    color: color[theme].textPrimary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
