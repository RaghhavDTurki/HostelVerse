import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {width, height, colors} from '../utils/constants';
import {profileImg} from '../../assets/index';
import AdminHeader from './AdminHeader';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Item = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: width * 0.9,
        height: height * 0.13,
        flexDirection: 'row',
        padding: width * 0.01,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: width * 0.05,
        borderWidth: width * 0.001,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginBottom: height * 0.01,
      }}>
      <View style={{marginLeft: width * 0.01}}>
        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: '500',
            color: colors.black,
          }}>
          {item.wardenname}
        </Text>
        <Text>Hostel No. {item.hostelid} </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: colors.green}}>Update Warden | </Text>
          <Text style={{color: colors.red}}>Remove Warden</Text>
        </View>
      </View>
      <Image
        source={profileImg}
        resizeMode="contain"
        style={{
          width: width * 0.2,
          height: height * 0.1,
          marginLeft: width * 0.02,
        }}
      />
    </TouchableOpacity>
  );
};

const WardenList = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    getFeed();
  });

  const getFeed = async () => {
    var config = {
      method: 'get',
      url: 'https://hostelverse.herokuapp.com/admin/viewWarden',
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
      <AdminHeader />
      <Text
        style={{
          textAlign: 'center',
          fontSize: width * 0.06,
          fontWeight: '600',
          color: colors.black,
        }}>
        Warden list
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: width * 0.05, marginTop: height * 0.05}}>
        {feed &&
          feed.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WardenList;
