import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import InterviewTabCompany from './company/InterviewTabCompany';
import InterviewTabJobber from './jobber/InterviewTabJobber';

const role: string = 'companys';

const InterviewPage = () => {
  return (
    <View style={{flex:1}}>
      {role === 'company' ? <InterviewTabCompany /> : <InterviewTabJobber />}
    </View>
  );
};

export default InterviewPage;

const styles = StyleSheet.create({});
