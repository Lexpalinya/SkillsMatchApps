import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Organization} from '../CompanyTab';
import CustomImage from '../../../../Utils/components/CustomImage';
import CustomButton from '../../../../Utils/components/CustomButton';

const defaultImage =
  'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg';

const CardCompany: React.FC<{item: Organization}> = ({item}) => {
  const handle = (id: string) => {
    console.log(id);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handle(item.id);
      }}>
      <View style={styles.itemContainer}>
        <CustomImage
          style={{width: 70, height: 70}}
          source={{uri: item.users?.profile || defaultImage}}
          borderRadius={50}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.nameEng}{' '}
          </Text>
          <Text style={{paddingBottom: 8}} numberOfLines={1}>
            {item.businessModel.name}
          </Text>
          <Text style={styles.address} numberOfLines={1}>
            {item.cProvice}, {item.cDistrict}, {item.cVillage}
          </Text>
        </View>
        <CustomButton
          style={styles.button}
          textStyle={styles.textButton}
          onPress={() => {}}
          title="ຕິດຕາມ"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardCompany;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,

    // backgroundColor:"red"
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
});
