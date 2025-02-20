import {ScrollView, StyleSheet, View} from 'react-native';
import color from '../../../Constants/color';
import LoginTitle from './components/LoginTitle';
import LogInForm from './components/LogInForm';
import LoginBottom from './components/LoginBottom';

const theme = 'light';

const LoginPage = () => {
  return (
    <ScrollView style={{backgroundColor: color[theme].backgroundPage}}>
      <View style={styles.stlyesView}>
        <LoginTitle />
        <LogInForm />
        <LoginBottom />
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  stlyesView: {
    paddingVertical: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color[theme].backgroundPage,
  },
});
