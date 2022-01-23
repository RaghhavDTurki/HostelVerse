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

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('Akash1@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState(false);

  const userSignIn = () => {
    setError(false);
    if (email.length < 5 || password.length < 5) {
      setError(true);
      return;
    }

    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: 'post',
      url: routes.signIn,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(data => console.log(data))
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
            onPress={userSignIn}>
            <Text style={{color: colors.white}}>Sign In</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
            <Text style={{color: colors.black, opacity: 0.8}}>
              Don't have an account?{' '}
            </Text>
            <Text
              style={{color: colors.black, fontWeight: '600'}}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;
