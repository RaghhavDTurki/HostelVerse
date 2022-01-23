import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {profileImg} from '../../assets/index';
import AdminHeader from './AdminHeader';

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Item = () => {
  return (
    <View
      style={{
        borderWidth: width * 0.003,
        padding: width * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.03,
        marginVertical: height * 0.01,
      }}>
      <Text>Hostel 01</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          borderTopWidth: width * 0.002,
        }}>
        <View
          style={{
            borderRightWidth: width * 0.002,
            paddingRight: width * 0.02,
          }}>
          <Text>Occupancy Rate</Text>
          <Text>20%</Text>
        </View>
        <View>
          <Text>Due Payment</Text>
          <Text>08/80</Text>
        </View>
        <View
          style={{
            borderLeftWidth: width * 0.002,
            paddingLeft: width * 0.02,
          }}>
          <Text>Issues Resolved</Text>
          <Text>17/20</Text>
        </View>
      </View>
    </View>
  );
};

const Occupancy = () => {
  const date = new Date();
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <AdminHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: width * 0.05, marginTop: height * 0.03}}>
        <Text style={{fontSize: width * 0.04}}>
          {date.getHours() + ' : ' + date.getMinutes()}
        </Text>
        <Text
          style={{
            fontSize: width * 0.05,
            fontWeight: '600',
            color: colors.orange,
          }}>
          {date.getDate() +
            ' ' +
            month[date.getMonth()] +
            ', ' +
            date.getFullYear()}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: height * 0.04,
          }}>
          <Image
            source={profileImg}
            style={{width: width * 0.2, height: width * 0.2}}
          />
          <View
            style={{marginLeft: width * 0.01, justifyContent: 'space-between'}}>
            <Text>Welcome</Text>
            <Text style={{fontSize: width * 0.045, fontWeight: '600'}}>
              Wade Warden
            </Text>
            <Text>Aapka din mangalmayee rhe !!!</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: '500',
            marginTop: height * 0.03,
          }}>
          Occupancy Rate
        </Text>

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Occupancy;
