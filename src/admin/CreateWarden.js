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
import {bg4, profileImg} from '../../assets/index';
import AdminHeader from './AdminHeader';

const CreateWarden = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [hostel, setHostel] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
            <Text style={{fontSize: width * 0.04}}>Hostel : </Text>
            <TextInput
              onChangeText={e => setHostel(e)}
              value={hostel}
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
              placeholder="Hostel"
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.7,
              alignItems: 'center',
              marginVertical: height * 0.01,
            }}>
            <Text style={{fontSize: width * 0.04}}>Email : </Text>
            <TextInput
              onChangeText={e => setEmail(e)}
              value={email}
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
              placeholder="Email"
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
            <Text style={{fontSize: width * 0.04}}>Phone No : </Text>
            <TextInput
              onChangeText={e => setPhone(e)}
              value={phone}
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
              placeholder="Phone No"
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

export default CreateWarden;
