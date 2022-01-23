import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {width, height, colors} from '../utils/constants';
import {profileImg} from '../../assets/index';
import Clipboard from '@react-native-community/clipboard';

const StudentDashboard = ({navigation}) => {
  const copyToClipboard = () => {
    Clipboard.setString('#123456');
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ScrollView
        style={{
          marginHorizontal: width * 0.05,
          marginTop: height * 0.05,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={profileImg} />
          <Text
            style={{
              fontSize: width * 0.05,
              marginVertical: height * 0.005,
              fontWeight: '600',
              color: colors.black,
            }}>
            Wade Warden
          </Text>
          <TouchableOpacity
            onPress={copyToClipboard}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: colors.orangeLight,
              padding: width * 0.01,
              alignItems: 'center',
              borderRadius: width * 0.015,
            }}>
            <Text
              style={{
                marginRight: width * 0.01,
              }}>
              ID #123456
            </Text>
            <Icon name="copy" />
          </TouchableOpacity>
          <View
            style={{
              width: width * 0.8,
              height: height * 0.001,
              backgroundColor: colors.black,
              marginVertical: height * 0.02,
            }}
          />
          <View
            style={{
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Hostel')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <FontAwesome5
                name="hotel"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Hostels
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('HostelPay')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <FontAwesome5
                name="credit-card"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Payment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('HostelCheckInOut')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <FontAwesome5
                name="chart-pie"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Check In / Out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('HostelLeave')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <Entypo
                name="newsletter"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Apply Leave
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RoomIssue')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <FontAwesome5
                name="info-circle"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Room Complaint
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WardenChat')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <Entypo name="chat" size={width * 0.05} color={colors.orange} />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Chat with Warden
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Announcement')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <Octicons
                name="broadcast"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Announcements
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feedback')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <Icon
                name="user-plus"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                FeedBack
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('StudentProfile')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.01,
              }}>
              <FontAwesome5
                name="user"
                size={width * 0.05}
                color={colors.orange}
              />
              <Text style={{fontSize: width * 0.05, marginLeft: width * 0.02}}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentDashboard;
