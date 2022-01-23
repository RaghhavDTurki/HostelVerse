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
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import AdminHeader from './AdminHeader';
import {bg4, profileImg} from '../../assets/index';
import axios from 'axios';

const Item = ({item}) => {
  return (
    <View
      style={{
        borderWidth: width * 0.001,
        width: width * 0.8,
        padding: width * 0.02,
        elevation: 4,
        backgroundColor: colors.white,
        borderRadius: width * 0.05,
        marginVertical: height * 0.01,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: '500',
            color: colors.black,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: width * 0.04,
            backgroundColor: colors.green,
            marginLeft: width * 0.01,
            color: colors.white,
            paddingHorizontal: width * 0.01,
            paddingVertical: width * 0.005,
            borderRadius: width * 0.01,
          }}>
          {item.rating + '/5'}
        </Text>
      </View>
      <Text>{item.message}</Text>
    </View>
  );
};

const ViewFeedbacks = ({navigation}) => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    getFeed();
  });

  const getFeed = async () => {
    var config = {
      method: 'get',
      url: 'https://hostelverse.herokuapp.com/admin/viewFeedback',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setFeed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            View Feedbacks
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {feed &&
              feed.map((item, index) => {
                return <Item item={item} key={index} />;
              })}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ViewFeedbacks;
