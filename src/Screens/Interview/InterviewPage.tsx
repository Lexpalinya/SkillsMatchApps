import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../../Constants/color';
import PostsTab from '../Recruiting/Post/PostsTab';
import Interview from './components/Interview';

const theme = 'light';
const Tab = createMaterialTopTabNavigator();
const TabMenu = [
  {
    name: 'regisJob',
    title: 'ວຽກທີ່ສະໝັກໄວ້',
    component: Interview,
    params: {type: 'regisJob'},
  },
  {
    name: 'awaitInterview',
    title: 'ລໍຖ້າສຳພາດ',
    component: Interview,
    params: {type: 'awaitInterview'},
  },
  {
    name: 'interviewResult',
    title: 'ຜົນການສຳພາດ',
    component: Interview,
    params: {type: 'interviewResult'},
  },
];
const InterviewPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarIndicatorStyle: {
          backgroundColor: color[theme].primary,
          height: 2,
        },
      }}>
      {TabMenu.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={(props: any) => <Interview {...props} />}
            initialParams={{type: item.params?.type ?? ''}}
            options={{
              tabBarLabel: ({focused}) => {
                return (
                  <Text style={[styles.title, focused && styles.titleFocus]}>
                    {item.title}
                  </Text>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default InterviewPage;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: color[theme].textPrimary,
    fontWeight: 'bold',
  },
  titleFocus: {
    fontSize: 16,
    color: color[theme].primary,
    fontWeight: 'bold',
  },
});
