import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import StudentHeader from './StudentHeader';

const RoomIssue = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
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
            marginBottom: height * 0.05,
            fontWeight: '600',
            color: colors.black,
          }}>
          Room Issue
        </Text>
        <Text
          style={{
            fontSize: width * 0.05,
            color: colors.black,
            marginVertical: height * 0.01,
          }}>
          Describe the issue :
        </Text>
        <TextInput
          onChangeText={e => setValue(e)}
          value={value}
          style={{
            width: width * 0.8,
            height: height * 0.4,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            elevation: 10,
            textAlignVertical: 'top',
            backgroundColor: colors.white,
            borderRadius: width * 0.05,
            padding: width * 0.03,
          }}
          placeholder="Write Your Issue Here..."
        />
      </View>
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

export default RoomIssue;
