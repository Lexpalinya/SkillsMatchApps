import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import color from '../../Constants/color';
import HomeAppBar from './components/HomeAppBar';
import {ScrollView} from 'react-native-gesture-handler';
import HomeImageSlider from './components/HomeImageSlider';
import HomeBody from './components/HomeBody';
import {useRefreshTokenMutation} from '../../Store/auth';

const theme = 'light';
const images = [
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
  'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg',
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-800x525.jpg',
];
const HomePage = () => {
  const [refreshToken, {data, error, isLoading}] = useRefreshTokenMutation();

  const handleRefresh = async () => {
    try {
      const response = await refreshToken({}).unwrap();
      console.log('New Token:', response);
    } catch (err) {
      console.error('Refresh Failed:', err);
    }
  };

  // เรียกใช้เมื่อ Component โหลด
  useEffect(() => {
    handleRefresh();
  }, []);
  return (
    <View style={styles.stlyesView}>
      <HomeAppBar />
      <ScrollView style={styles.scroll}>
        <HomeImageSlider images={images} />
        <HomeBody />
      </ScrollView>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  stlyesView: {
    flex: 1,
    backgroundColor: color[theme].backgroundHomePage,
  },
  scroll: {
    flex: 1,
  },
});
