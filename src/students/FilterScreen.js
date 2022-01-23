import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {width, height, colors} from '../utils/constants';
import {hostelImg} from '../../assets/index';
import StudentHeader from './StudentHeader';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Item = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HostelDetail')}
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
        location: 'Jaipur,Rajasthan',
        roomsleft: 2,
        totalrooms: 2,
        wardenid: 'w6',
      }}>
      <View style={{paddingLeft: width * 0.01}}>
        <Text>{data.hostelname}</Text>
        <Text>{data.location + ' | ' + data.totalrooms + ' student'}</Text>
        <Text>{data.roomsleft + ' Rooms Left'}</Text>
      </View>
      <Image
        source={hostelImg}
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

const FilterScreen = () => {
  const [hostelData, setHostelData] = useState(null);
  useEffect(() => {
    axios
      .get('https://hostelverse.herokuapp.com/getHostelList')
      .then(data => setHostelData(data.data));
  });
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <StudentHeader />
      <ScrollView
        style={{marginHorizontal: width * 0.05, marginTop: height * 0.05}}>
        {hostelData &&
          hostelData.map((item, index) => {
            return <Item data={item} key={index} />;
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
