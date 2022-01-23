import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ChatItem = ({text, time, left}) => {
  return (
    <View
      style={{
        backgroundColor: left ? 'pink' : 'green',
        borderRadius: width * 0.02,
        padding: width * 0.02,
        maxWidth: width * 0.7,
        marginVertical: height * 0.01,
        alignSelf: left ? 'flex-start' : 'flex-end',
      }}>
      <Text
        style={{
          fontSize: width * 0.04,
          fontWeight: '500',
          color: colors.black,
        }}>
        {text}
      </Text>
      <Text style={{fontSize: width * 0.03}}>{time}</Text>
    </View>
  );
};

const Chat = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <View
        style={{
          paddingLeft: width * 0.03,
          paddingRight: width * 0.05,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: height * 0.02,
          backgroundColor: colors.yellow,
        }}>
        <Icon
          name="chevron-left"
          size={30}
          color={colors.black}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: width * 0.05,
            fontWeight: '600',
            color: colors.black,
          }}>
          Wade Warden
        </Text>
        <Icon
          name="list"
          size={30}
          color={colors.black}
          onPress={() => navigation.navigate('StudentDashboard')}
        />
      </View>
      <ScrollView
        style={{marginHorizontal: width * 0.03, marginTop: height * 0.01}}>
        <ChatItem text={'Whats Up?'} time={'9:34 AM'} left={true} />
        <ChatItem
          text={'I am fine sir. What is the last date for fee submission?'}
          time={'9:34 AM'}
        />
        <ChatItem
          text={'The last date is tomorrow.'}
          time={'9:34 AM'}
          left={true}
        />
        <ChatItem text={'OK! Thank you sir.'} time={'9:34 AM'} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: width,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            padding: 10,
            width: width * 0.8,
            borderRadius: width * 0.02,
            backgroundColor: '#DCDCDC',
          }}
          onChangeText={() => null}
          value={value}
          placeholder="Type a message"
        />
        <Ionicons
          name="ios-send-outline"
          size={26}
          color={colors.black}
          style={{
            padding: width * 0.02,
            backgroundColor: '#8DEB6D',
            borderRadius: width * 0.1,
            overflow: 'hidden',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
