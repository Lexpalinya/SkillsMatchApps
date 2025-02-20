import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../../../Utils/components/CustomImage';
import color from '../../../Constants/color';

const theme = 'light';
const HomeAppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SkillMatch</Text>

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
    </View>
  );
};

export default HomeAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: color[theme].backgroundPage,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    display: 'flex',
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    color: color[theme].primary,
    fontSize: 35,
    fontWeight: 'bold',
    // backgroundColor: "red",
  },
});
