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

const AnnouncmentItem = ({title, msg}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * 0.01,
      }}>
      <Text>22 January</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: width * 0.01,
          backgroundColor: colors.orangeLight,
          paddingVertical: height * 0.01,
          paddingHorizontal: width * 0.03,
          width: width * 0.8,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: width * 0.05,
            backgroundColor: colors.white,
            width: width * 0.7,
            borderRadius: width * 0.02,
            marginBottom: height * 0.01,
          }}>
          {title}
        </Text>
        <Text style={{textAlign: 'center'}}>{msg}</Text>
      </View>
    </View>
  );
};

const Announcement = () => {
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
          Announcements
        </Text>
        <AnnouncmentItem
          msg={
            'This is to inform everyone that the carpenter will be available tomorrow from 12 noon to 5 PM. Hence, everyone is requested to get their furniture’s service done.'
          }
          title={'Service tomorrow!'}
        />
        <AnnouncmentItem
          msg={
            'This is to inform everyone that the mess will remain closed tomorrow morning and afternoon! Normal timings for evening snacks and dinner.'
          }
          title={'Mess off!'}
        />
        <AnnouncmentItem
          msg={
            'This is to inform everyone that the volleyball court is undergoing regular maintenance till tomorrow. Hence, everyone is requested to go to the sports ground for the same.'
          }
          title={'No Volleyball tomorrow'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Announcement;
