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
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {width, height, colors} from '../utils/constants';
import StudentHeader from './StudentHeader';
import {bg3} from '../../assets/index';

const Hostelfeedback = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ImageBackground style={{flex: 1}} source={bg3}>
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
              marginBottom: height * 0.02,
              fontWeight: '600',
              color: colors.black,
            }}>
            Feedback Form
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: width * 0.04,
              fontWeight: '600',
              color: colors.black,
            }}>
            Rating
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: width * 0.02,
              borderRadius: width * 0.02,
              backgroundColor: colors.black,
              marginTop: height * 0.01,
            }}>
            <Icon
              name="star"
              color={colors.orange}
              size={width * 0.05}
              style={{marginHorizontal: width * 0.01}}
            />
            <Icon
              name="star"
              color={colors.orange}
              size={width * 0.05}
              style={{marginHorizontal: width * 0.01}}
            />
            <Icon
              name="star"
              color={colors.orange}
              size={width * 0.05}
              style={{marginHorizontal: width * 0.01}}
            />
            <Icon
              name="star"
              color={colors.orange}
              size={width * 0.05}
              style={{marginHorizontal: width * 0.01}}
            />
            <Icon
              name="star"
              color={colors.orange}
              size={width * 0.05}
              style={{marginHorizontal: width * 0.01}}
            />
          </View>
          <Text
            style={{
              fontSize: width * 0.05,
              color: colors.black,
              marginVertical: height * 0.01,
            }}>
            Review
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
            placeholder="Write Your review Here..."
          />
        </View>
      </ImageBackground>
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

export default Hostelfeedback;
