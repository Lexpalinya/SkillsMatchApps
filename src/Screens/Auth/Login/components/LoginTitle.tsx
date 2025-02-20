import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import color from '../../../../Constants/color';
import CustomImage from '../../../../Utils/components/CustomImage';

const theme = 'light';
const LoginTitle = () => {
  return (
    <View style={styles.container}>
      <CustomImage
        style={styles.image}
        source={{
          uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        }}
        width={150}
        height={150}
        borderRadius={0}
        resizeMode="cover"
        showFull={false}
      />
      <Text style={styles.title}>ເຂົ້າສູ່ລະບົບ</Text>
      <Text style={styles.subtitle}>
        ກະລຸນາເຂົ້າສູ່ບັນຊີຂອງທ່ານເພື່ອນຳໃຊ້ແອັບ
      </Text>
    </View>
  );
};

export default LoginTitle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {marginBottom: 50},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color[theme].primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: color[theme].textSecondary,
  },
});
