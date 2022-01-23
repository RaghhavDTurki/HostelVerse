import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import AdminHeader from './AdminHeader';
import {bg4, profileImg} from '../../assets/index';

const Item = () => {
  return (
    <View
      style={{
        borderWidth: width * 0.001,
        padding: width * 0.02,
        elevation: 10,
        backgroundColor: colors.white,
        borderRadius: width * 0.05,
        marginVertical: height * 0.01,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: '500',
            color: colors.black,
          }}>
          Himanshu Chittora
        </Text>
        <Text
          style={{
            fontSize: width * 0.04,
            backgroundColor: colors.green,
            marginLeft: width * 0.01,
            color: colors.white,
            paddingHorizontal: width * 0.01,
            paddingVertical: width * 0.005,
            borderRadius: width * 0.01,
          }}>
          4/5
        </Text>
      </View>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis arcu
        lectus non lacus. Sem rutrum ullamcorper tincidunt nunc urna enim at
        nunc. Ut dui sit egestas nisl auctor ornare leo, nullam. Est aenean
        dictumst tincidunt diam scelerisque neque egestas tempor. Adipiscing
        proin eros, eget lacus. A eget arcu dapibus sollicitudin et ut praesent
        vulputate. Vestibulum risus ullamcorper proin non hendrerit turpis
        fermentum sem sit. Quisque rutrum venenatis sed.
      </Text>
    </View>
  );
};

const ViewFeedbacks = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ImageBackground style={{flex: 1}} source={bg4}>
        <AdminHeader />
        <View
          style={{
            paddingHorizontal: width * 0.05,
            paddingTop: height * 0.03,
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.06,
              marginBottom: height * 0.02,
              fontWeight: '600',
              color: colors.black,
            }}>
            View Feedbacks
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Item />
            <Item />
            <Item />
            <Item />
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ViewFeedbacks;
