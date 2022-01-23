import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const colors = {
  yellow: '#FCD129',
  white: 'white',
  black: 'black',
  orange: '#F1AE00',
  green: '#008000',
  orangeLight: '#FABB18',
  grey: 'grey',
  red: 'red',
};

const routes = {
  signUp: 'https://hostelverse.herokuapp.com/student/signup',
  signIn: 'https://hostelverse.herokuapp.com/student/signin',
};

export {width, height, colors, routes};
