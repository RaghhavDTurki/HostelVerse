import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {profileImg} from '../../assets/index';
import StudentHeader from './StudentHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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

const CheckInOut = () => {
  const date = new Date();

  const [userData, setUserData] = useState(null);
  const [checked, setChecked] = useState(false);

  const getProfile = async () => {
    const data = await AsyncStorage.getItem('authData');
    setUserData(JSON.parse(data));
  };

  useEffect(() => {
    getProfile();
  });

  const check = async () => {
    if (!userData.hostelid) return;

    var data = JSON.stringify({
      studentid: userData.studentid,
    });

    var config = {
      method: 'post',
      url: `https://hostelverse.herokuapp.com/student/${
        checked ? 'checkin/' : 'checkout/'
      }`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(async response => {
        setChecked(!checked);
      })
      .catch(function (error) {});
  };
  if (!userData) return null;
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <StudentHeader />
      <View style={{marginHorizontal: width * 0.05, marginTop: height * 0.03}}>
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
              {userData.profile.name}
            </Text>
            <Text>Aapka din mangalmayee rhe !!!</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: height * 0.05,
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              backgroundColor: colors.yellow,
              marginHorizontal: width * 0.1,
            }}>
            <Text style={{color: colors.black}}>Hostel No.</Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: '600',
                fontStyle: 'italic',
                color: colors.black,
              }}>
              {userData.hostelid ? userData.hostelid : 'Not Allocated'}
            </Text>
          </View>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              backgroundColor: colors.yellow,
              marginHorizontal: width * 0.1,
            }}>
            <Text style={{color: colors.black}}>Room No.</Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: '600',
                color: colors.black,
                fontStyle: 'italic',
              }}>
              {userData.roomid ? userData.roomid : 'Not Allocated'}
            </Text>
          </View>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              backgroundColor: colors.yellow,
              marginHorizontal: width * 0.1,
              marginVertical: height * 0.05,
            }}>
            <Text style={{color: colors.black}}>Hostel Fees</Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: '600',
                color: colors.black,
                fontStyle: 'italic',
              }}>
              Paid
            </Text>
          </View>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
              backgroundColor: colors.yellow,
              marginHorizontal: width * 0.1,
              marginVertical: height * 0.05,
            }}>
            <Text style={{color: colors.black}}>Mess Fees</Text>
            <Text
              style={{
                fontSize: width * 0.07,
                fontWeight: '600',
                color: colors.black,
                fontStyle: 'italic',
              }}>
              Paid
            </Text>
          </View>
        </View>
        <View style={{marginTop: height * 0.04}}>
          <Text
            style={{
              fontSize: width * 0.04,
              fontWeight: '500',
              marginVertical: height * 0.01,
              color: colors.black,
            }}>
            Check In / Out
          </Text>
          <TouchableOpacity
            onPress={check}
            style={{
              backgroundColor: checked ? colors.green : colors.red,
              padding: width * 0.01,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width * 0.1,
            }}>
            <Text
              style={{
                fontSize: width * 0.05,
                fontWeight: '500',
                color: colors.white,
              }}>
              {checked ? 'In' : 'Out'}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: width * 0.03,
              fontWeight: '500',
              marginVertical: height * 0.01,
              color: colors.black,
            }}>
            Pro Tip: Click on the button to Check In or Check Out.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckInOut;
