import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {profileImg} from '../../assets/index';

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
              Wade Warden
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
              01
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
              {'101'}
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
            style={{
              backgroundColor: colors.green,
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
              IN
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
