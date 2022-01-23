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
import {width, height, colors} from '../utils/constants';
import {hostelBg, profileImg} from '../../assets/index';

const FeedbackItem = () => {
  return (
    <View
      style={{
        borderWidth: width * 0.001,
        padding: width * 0.01,
        marginVertical: height * 0.01,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={profileImg}
          style={{width: width * 0.1, height: width * 0.1}}
        />
        <View style={{marginLeft: width * 0.01}}>
          <Text style={{fontWeight: '600'}}>Vinamra Vashishth</Text>
          <Text>22 January, 2022 | 9:30 pm</Text>
        </View>
      </View>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices duis
        eget lacus aliquam eros, suscipit egestas mi etiam. Aliquet suspendisse
        tellus malesuada egestas tellus. Quam vitae ornare nunc laoreet nunc non
        diam.
      </Text>
    </View>
  );
};

const FilterScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={hostelBg}
          resizeMode="cover"
          style={{height: height * 0.3, width: width}}
        />
        <View
          style={{
            width: width * 0.8,
            height: height * 0.1,
            backgroundColor: colors.white,
            elevation: 10,
            alignSelf: 'center',
            marginTop: -height * 0.05,
            borderRadius: width * 0.03,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', width: width * 0.7}}>
            Hostel 1
          </Text>
          <Text style={{textAlign: 'center', width: width * 0.7}}>
            Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017
          </Text>
        </View>
        <View
          style={{
            width: width * 0.8,
            height: height * 0.05,
            backgroundColor: colors.white,
            elevation: 10,
            alignSelf: 'center',
            marginTop: height * 0.03,
            borderRadius: width * 0.05,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{}}>4.3/5</Text>
          <Text style={{}}>20 ratings</Text>
          <Text style={{}}>5 reviews</Text>
        </View>
        <View
          style={{marginHorizontal: width * 0.05, marginTop: height * 0.03}}>
          <Text style={{fontSize: width * 0.05, color: colors.yellow}}>
            Description
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu lorem
            et elementum sit metus ac faucibus varius. Non ut tellus consectetur
            nec tempor consectetur volutpat risus cursus. Non, quis aenean massa
            lacus, in nisl. Faucibus viverra ac consectetur pulvinar tempor
            etiam donec ac. Scelerisque scelerisque tellus, ultricies aliquam
            vel praesent vitae. Sapien viverra ultrices morbi amet volutpat,
            risus eget dictumst nullam. At nibh nibh sit sollicitudin sodales
            nam sed. Pellentesque pellentesque proin justo, tincidunt sociis
            vulputate proin scelerisque. Odio dignissim et potenti bibendum
            vitae vel. Penatibus lacus non, consequat massa auctor interdum eu
            lectus. Faucibus suspendisse viverra placerat vitae ut auctor
            suspendisse. Turpis molestie id ac volutpat integer condimentum
            purus non adipiscing. Urna mauris morbi nulla suspendisse ut sit
            amet. Vestibulum lectus risus.
          </Text>
        </View>
        <View
          style={{marginHorizontal: width * 0.05, marginTop: height * 0.03}}>
          <Text style={{fontSize: width * 0.05, color: colors.yellow}}>
            Room Type
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.15,
              marginTop: height * 0.01,
            }}>
            <Icon name="user" size={width * 0.08} />
            <Text style={{fontSize: width * 0.04}}>1 seater</Text>
          </View>
        </View>
        <View
          style={{marginHorizontal: width * 0.05, marginTop: height * 0.03}}>
          <Text style={{fontSize: width * 0.05, color: colors.yellow}}>
            Feedback
          </Text>
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </View>
        <View style={{marginVertical: height * 0.05}} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: colors.yellow,
          width: width,
          height: height * 0.08,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: width * 0.06,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: width * 0.045}}>
            Rs 6000/month
          </Text>
          <Text>Available: 32 | Max Capacity: 40</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.black,
            paddingVertical: width * 0.02,
            paddingHorizontal: width * 0.04,
            borderRadius: width * 0.05,
          }}>
          <Text style={{color: colors.white}}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
