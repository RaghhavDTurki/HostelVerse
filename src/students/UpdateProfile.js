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
import StudentHeader from './StudentHeader';
import {bg4, profileImg} from '../../assets/index';

const UpdateProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ImageBackground style={{flex: 1}} source={bg4}>
        <StudentHeader />
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
            Update Profile
          </Text>
          <Image
            source={profileImg}
            style={{
              width: width * 0.4,
              height: width * 0.4,
              marginBottom: height * 0.02,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.7,
              alignItems: 'center',
              marginVertical: height * 0.01,
            }}>
            <Text style={{fontSize: width * 0.04}}>Name : </Text>
            <TextInput
              onChangeText={e => setName(e)}
              value={name}
              style={{
                width: width * 0.4,
                height: height * 0.04,
                backgroundColor: colors.white,
                textAlignVertical: 'center',
                padding: 0,
                marginLeft: width * 0.01,
                elevation: 10,
                paddingLeft: width * 0.01,
                borderRadius: width * 0.02,
              }}
              placeholder="Name"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.7,
              alignItems: 'center',
              marginVertical: height * 0.01,
            }}>
            <Text style={{fontSize: width * 0.04}}>Gender : </Text>
            <TextInput
              onChangeText={e => setGender(e)}
              value={gender}
              style={{
                width: width * 0.4,
                height: height * 0.04,
                backgroundColor: colors.white,
                textAlignVertical: 'center',
                padding: 0,
                marginLeft: width * 0.01,
                elevation: 10,
                paddingLeft: width * 0.01,
                borderRadius: width * 0.02,
              }}
              placeholder="Gender"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.7,
              alignItems: 'center',
              marginVertical: height * 0.01,
            }}>
            <Text style={{fontSize: width * 0.04}}>Address : </Text>
            <TextInput
              onChangeText={e => setAddress(e)}
              value={address}
              style={{
                width: width * 0.4,
                height: height * 0.04,
                backgroundColor: colors.white,
                textAlignVertical: 'center',
                padding: 0,
                marginLeft: width * 0.01,
                elevation: 10,
                paddingLeft: width * 0.01,
                borderRadius: width * 0.02,
              }}
              placeholder="Address"
            />
          </View>
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
          <Text style={{color: colors.white}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;
