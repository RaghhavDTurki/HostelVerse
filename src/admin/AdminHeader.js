import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {width, height, colors} from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';

const AdminHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginLeft: width * 0.03,
        marginRight: width * 0.05,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: height * 0.01,
      }}>
      <Icon
        name="chevron-left"
        size={30}
        color={colors.black}
        onPress={() => navigation.goBack()}
      />
      <Icon
        name="list"
        size={30}
        color={colors.black}
        onPress={() => navigation.navigate('AdminDashboard')}
      />
    </View>
  );
};

export default AdminHeader;
