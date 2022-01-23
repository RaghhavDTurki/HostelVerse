import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import {width, colors, height, routes} from '.././utils/constants';
import {background} from '../../assets/index';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('Akash@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [confirmPassword, setConfirmPassword] = useState('12345678');
  const [name, setName] = useState('Akash');
  const [gender, setGender] = useState('Male');
  const [address, setAddress] = useState('Khopoli,Maharashtra');
  const [id, setId] = useState('1138');
  const [phone, setPhone] = useState('1234567890');
  const [error, setError] = useState(false);

  const userSignUp = () => {
    setError(false);
    if (
      email.length < 5 ||
      password.length < 5 ||
      password.length < 5 ||
      name.length < 5 ||
      gender.length < 4 ||
      address.length < 5 ||
      phone.length < 10 ||
      !id
    ) {
      setError(true);
      return;
    }

    if (password != confirmPassword) {
      setError(true);
      return;
    }
    var data = JSON.stringify({
      email: email,
      studentid: id,
      name: name,
      password: password,
      location: address,
      contactno: phone,
    });

    var config = {
      method: 'post',
      url: routes.signUp,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{
          backgroundColor: colors.yellow,
          flex: 1,
          alignItems: 'center',
          position: 'relative',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: height * 0.05,
            alignItems: 'center',
          }}>
          <Text
            onPress={() => console.log('Pressed')}
            style={{
              fontSize: width * 0.1,
              fontWeight: '500',
              color: colors.black,
            }}>
            {'HostelVerse'.toUpperCase()}
          </Text>
          <TextInput
            onChangeText={e => setName(e)}
            value={name}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Name"
          />
          <TextInput
            onChangeText={e => setId(e)}
            value={id}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Id"
          />
          <TextInput
            onChangeText={e => setPhone(e)}
            value={phone}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Phone"
          />
          <TextInput
            onChangeText={e => setEmail(e)}
            value={email}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Email"
          />
          <TextInput
            secureTextEntry
            onChangeText={e => setPassword(e)}
            value={password}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Password"
          />
          <TextInput
            secureTextEntry
            onChangeText={e => setConfirmPassword(e)}
            value={confirmPassword}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Confirm Password"
          />
          <TextInput
            onChangeText={e => setAddress(e)}
            value={address}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Address"
          />
          <TextInput
            onChangeText={e => setGender(e)}
            value={gender}
            style={{
              backgroundColor: colors.white,
              borderRadius: width * 0.02,
              width: width * 0.8,
              height: height * 0.045,
              paddingHorizontal: width * 0.01,
              paddingVertical: 0,
              textAlignVertical: 'center',
              marginVertical: height * 0.005,
            }}
            placeholder="Gender"
          />
          {error ? (
            <Text
              style={{
                color: colors.red,
                fontSize: width * 0.04,
                fontWeight: '500',
              }}>
              Enter Correct Values
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: colors.black,
              width: width * 0.4,
              height: height * 0.04,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width * 0.01,
              marginTop: height * 0.015,
            }}
            onPress={userSignUp}>
            <Text style={{color: colors.white}}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
            <Text style={{color: colors.black, opacity: 0.8}}>
              Already have an account?{' '}
            </Text>
            <Text
              style={{color: colors.black, fontWeight: '600'}}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
