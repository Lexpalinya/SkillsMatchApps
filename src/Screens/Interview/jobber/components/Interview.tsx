import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {FlatList} from 'react-native-gesture-handler';
import {TablerSearch} from '../../../../../assets/Icon';
import PostsCard from '../../../Recruiting/Post/components/PostsCard';
import color from '../../../../Constants/color';
import {ParamListBase, RouteProp} from '@react-navigation/native';

type InterviewProps = {
  route: RouteProp<ParamListBase, string>;
};
const theme = 'light';

const Interview = ({route}: InterviewProps) => {
  const {type} = route.params as {type: string};
  return (
    <View style={styles.container}>
      <View style={{marginTop: 16}}>
        <Text>ຄົ້ນຫາ</Text>
        <View style={[styles.inputContainer]}>
          <TablerSearch />
          <TextInput placeholderTextColor={'999'} style={[styles.input]} />
        </View>
      </View>
      <Text style={styles.text}>ທັງໝົດ 10 ລາຍການ</Text>

      <FlatList
        data={[1, 1, 1, 1, 1, 1, 11, 1]}
        renderItem={() => <PostsCard showButton={false} />}
      />
    </View>
  );
};

export default Interview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: color[theme].backgroundPage,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color[theme].textPrimary,
    marginVertical: 16,
  },
  inputContainer: {
    
    minHeight: 48,
    borderColor: color[theme].containerBorder,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: color[theme].containerBackground,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderStyle: 'solid',
    paddingVertical: Platform.OS == 'ios' ? 12 : 8,
    paddingHorizontal: 16,
    minHeight: 48,
    color: color[theme].textPrimary,
  },
});
