import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {paytm} from '../../assets/index';
import StudentHeader from './StudentHeader';

const FeeItem = ({fees}) => {
  return (
    <View
      style={{
        borderWidth: width * 0.001,
        backgroundColor: colors.white,
        padding: width * 0.03,
        elevation: 5,
        borderRadius: width * 0.03,
        marginVertical: height * 0.01,
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        onPress={() => console.log('Pressed')}>
        <View>
          <Text>Pay Hostel Fees</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: height * 0.01,
            }}>
            <Text>Pay with :</Text>
            <Image source={paytm} resizeMode="contain" />
          </View>
        </View>
        <Text
          style={{
            fontSize: width * 0.05,
            color: colors.black,
            fontWeight: '600',
          }}>
          Rs {fees}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const FeeItemPaid = ({fees}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        elevation: 4,
        borderWidth: width * 0.001,
        backgroundColor: colors.white,
        padding: width * 0.03,
        borderRadius: width * 0.03,
        marginVertical: height * 0.01,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Pay Hostel Fees</Text>
        <Text
          style={{
            fontSize: width * 0.05,
            color: colors.black,
            fontWeight: '600',
          }}>
          Rs {fees}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>22 December, 2021</Text>
        <Text>via paytm</Text>
      </View>
    </View>
  );
};

const PayFees = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <StudentHeader />
      <ScrollView
        style={{
          paddingHorizontal: width * 0.05,
          paddingTop: height * 0.03,
          flex: 1,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: width * 0.06,
            marginBottom: height * 0.05,
            fontWeight: '600',
            color: colors.black,
          }}>
          Pay Fees
        </Text>
        <FeeItem fees={'4000'} />
        <FeeItem fees={'2000'} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: width * 0.06,
            marginBottom: height * 0.01,
            marginTop: height * 0.04,
            fontWeight: '600',
            color: colors.black,
          }}>
          Payment Log
        </Text>
        <FeeItemPaid fees={'4000'} />
        <FeeItemPaid fees={'2000'} />
        <FeeItemPaid fees={'4000'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PayFees;
