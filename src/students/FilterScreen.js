import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {hostelImg} from '../../assets/index';

const Item = () => {
  return (
    <View
      style={{
        width: width * 0.9,
        height: height * 0.13,
        flexDirection: 'row',
        padding: width * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.05,
        borderWidth: width * 0.001,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginBottom: height * 0.01,
      }}>
      <View>
        <Text>Hostel 1</Text>
        <Text>Jaipur|rs 6000/month|4.3|40 Students</Text>
        <Text>Seats Left:32</Text>
      </View>
      <Image
        source={hostelImg}
        resizeMode="contain"
        style={{
          width: width * 0.2,
          height: height * 0.1,
          marginLeft: width * 0.02,
        }}
      />
    </View>
  );
};

const FilterScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <View
        style={{
          marginLeft: width * 0.03,
          marginRight: width * 0.05,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: height * 0.01,
        }}>
        <Icon name="chevron-left" size={30} color="#900" />
        <Icon name="list" size={30} color="#900" />
      </View>
      <ScrollView
        style={{marginHorizontal: width * 0.05, marginTop: height * 0.05}}>
        <Item />
        <Item />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
