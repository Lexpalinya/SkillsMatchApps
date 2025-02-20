import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {IconamoonEdit, TablerHome} from '../../../../../assets/Icon';
import CustomImage from '../../../../Utils/components/CustomImage';
import CustomButton from '../../../../Utils/components/CustomButton';
import color from '../../../../Constants/color';

const theme = 'light';
const defaultImage =
  'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg';

interface PostTabProps {
  name: string;
  amount: number;
}

const data: PostTabProps[] = [
  {
    name: 'ພະນັກງານບັນຊີ',
    amount: 2,
  },
  {
    name: 'ພະນັກງານການຕະຫຼາດ',
    amount: 2,
  },
  {
    name: 'ພະນັກຟອນເອັນສັກດັສດ່ກ້ຶັສ່າກ',
    amount: 2,
  },
  {
    name: 'ພະນັກງານບັນຊີ',
    amount: 2,
  },
  {
    name: 'ພະນັກງານການຕະຫຼາດ',
    amount: 2,
  },
  {
    name: 'ພະນັກຟອນເອັນສັກດັສດ່ກ້ຶັສ່າກ',
    amount: 2,
  },
  {
    name: 'ພະນັກງານບັນຊີ',
    amount: 2,
  },
  {
    name: 'ພະນັກງານການຕະຫຼາດ',
    amount: 2,
  },
  {
    name: 'ພະນັກຟອນເອັນສັກດັສດ່ກ້ຶັສ່າກ',
    amount: 2,
  },
];

const JobPostionDetail: React.FC<{item: PostTabProps}> = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
        marginRight: 20,
      }}>
      <Text style={styles.salaryText} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.salaryText}>{item.amount}</Text>
    </View>
  );
};
const PostsCard: React.FC<{showButton?: boolean}> = ({showButton = true}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <CustomImage
            style={{width: 70, height: 70}}
            source={{uri: defaultImage}}
            borderRadius={50}
          />
          <View style={styles.subTitleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              Sesavant company
            </Text>
            <Text style={{paddingBottom: 4}} numberOfLines={1}>
              Julia Pouros Julia Pouros Julia PourosJulia Pouros
            </Text>
            <Text style={styles.address} numberOfLines={1}>
              ນະຄອນຫຼວງວຽງຈັນ, ຈັນທະບູລີ, ດອນແດງ
            </Text>
          </View>
          {showButton ? (
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '90%',
              }}>
              <TouchableOpacity style={{marginBottom: 10}}>
                <TablerHome />
              </TouchableOpacity>
              <CustomButton
                style={styles.button}
                textStyle={styles.textButton}
                onPress={() => {}}
                title="ຕິດຕາມ"
              />
            </View>
          ) : (
            <TouchableOpacity style={{marginBottom: 10}}>
              <IconamoonEdit />
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.textSpaceBetween, styles.bottomLine]}>
          <Text style={{paddingHorizontal: 10}}>ຕຳແໜ່ງທີ່ຕ້ອງການ</Text>
          <Text>ຈຳນວນ</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={itme => <JobPostionDetail item={itme.item} />}
        />

        <View
          style={[
            styles.textSpaceBetween,
            styles.topLine,
            {alignContent: 'center', paddingTop: 10, paddingBottom: 8},
          ]}>
          <View
            style={[
              {
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
                marginBottom: 10,
              },
            ]}>
            <View
              style={[
                {flexDirection: 'row', marginRight: 5},
                Dimensions.get('window').width < 370
                  ? {
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  : null,
              ]}>
              <Text style={styles.salaryText} numberOfLines={1}>
                4,000,000
              </Text>
              <Text style={styles.salaryText}> - </Text>
              <Text style={styles.salaryText} numberOfLines={1}>
                10,000,000
              </Text>
            </View>
            <Text style={[styles.salaryText, {marginLeft: 10}]}>ກີບ</Text>
          </View>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text style={[styles.salaryText, {marginHorizontal: 10}]}>
              ສະແດງເພີ່ມ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostsCard;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: color[theme].backgroundPage,
    paddingHorizontal: 15,
    paddingVertical: 0,
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  subTitleContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  textButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,

    // backgroundColor:"red"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  textSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },

  topLine: {
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: color[theme].containerBorder,
  },
  bottomLine: {
    paddingBottom: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: color[theme].containerBorder,
  },
  salaryText: {
    fontSize: 16,
    fontWeight: 800,
    textAlign: 'right',
  },
});
