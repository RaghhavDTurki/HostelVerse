import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {width, colors, height} from '../utils/constants';
import {background} from '../../assets/index';

const Startscreen = ({navigation}) => {
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
            style={{
              fontSize: width * 0.05,
              fontWeight: '500',
              color: colors.black,
            }}>
            Enter into the magical world of
          </Text>
          <Text
            onPress={() => console.log('Pressed')}
            style={{
              fontSize: width * 0.1,
              fontWeight: '500',
              color: colors.black,
            }}>
            {'HostelVerse'.toUpperCase()}
          </Text>
          <Text style={{fontSize: width * 0.04, textAlign: 'center'}}>
            We have created an awesome app to tackle the problems related to
            hostels. Tighten your seat belt to go into a fascinating journey.
          </Text>
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
            onPress={() => navigation.replace('SignUp')}>
            <Text style={{color: colors.white}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Startscreen;
