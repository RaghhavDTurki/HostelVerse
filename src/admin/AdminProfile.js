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
import {bg2, profileImg} from '../../assets/index';

const AdminProfile = ({navigation}) => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ImageBackground style={{flex: 1}} source={bg2}>
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
            Profile
          </Text>
          <Image
            source={profileImg}
            style={{width: width * 0.4, height: width * 0.4}}
          />
          <Text style={{fontSize: width * 0.04}}>Name</Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
              marginBottom: height * 0.01,
            }}>
            Wade Warden
          </Text>
          <Text style={{fontSize: width * 0.04}}>Gender</Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
              marginBottom: height * 0.01,
            }}>
            Male
          </Text>
          <Text style={{fontSize: width * 0.04}}>Address</Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
              marginBottom: height * 0.01,
            }}>
            Bareily, Uttar Pradesh
          </Text>
          <Text style={{fontSize: width * 0.04}}>Email</Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
              marginBottom: height * 0.01,
            }}>
            raw@1234gmail.com
          </Text>
          <Text style={{fontSize: width * 0.04}}>Phone</Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
              marginBottom: height * 0.01,
            }}>
            1234567890
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: colors.yellow,
          width: width,
          height: height * 0.08,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: width * 0.06,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateProfile')}
          style={{
            backgroundColor: colors.black,
            paddingVertical: width * 0.02,
            paddingHorizontal: width * 0.04,
            borderRadius: width * 0.05,
          }}>
          <Text style={{color: colors.white}}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminProfile;
