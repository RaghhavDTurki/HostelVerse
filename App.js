/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Auth
import SignUp from './src/Auth/SignUp';
import StartScreen from './src/Auth/StartScreen';
import SignIn from './src/Auth/SignIn';

//Student
import StudentDashboard from './src/students/StudentDashboard';
import FilterScreen from './src/students/FilterScreen';
import HostelDetail from './src/students/HostelDetail';
import ChatScreen from './src/students/ChatScreen';
import CheckInOut from './src/students/CheckInOut';
import PayFees from './src/students/PayFees';
import LeaveApplication from './src/students/LeaveApplication';
import RoomIssue from './src/students/RoomIssue';
import Announcement from './src/students/Announcement';
import Hostelfeedback from './src/students/HostelFeedback';
import StudentProfile from './src/students/StudentProfile';
import UpdateProfile from './src/students/UpdateProfile';

//Admin
import AdminDashboard from './src/admin/AdminDashboard';
import WardenList from './src/admin/WardenList';
import CreateWarden from './src/admin/CreateWarden';
import ViewFeedbacks from './src/admin/ViewFeedbacks';
import AdminProfile from './src/admin/AdminProfile';
import Occupancy from './src/admin/Occupancy';

const StudentStack = createNativeStackNavigator();
const Student = () => {
  return (
    <StudentStack.Navigator screenOptions={{headerShown: false}}>
      <StudentStack.Screen
        name="StudentDashboard"
        component={StudentDashboard}
      />
      <StudentStack.Screen name="Hostel" component={FilterScreen} />
      <StudentStack.Screen name="HostelDetail" component={HostelDetail} />
      <StudentStack.Screen name="HostelPay" component={PayFees} />
      <StudentStack.Screen name="HostelCheckInOut" component={CheckInOut} />
      <StudentStack.Screen name="HostelLeave" component={LeaveApplication} />
      <StudentStack.Screen name="RoomIssue" component={RoomIssue} />
      <StudentStack.Screen name="WardenChat" component={ChatScreen} />
      <StudentStack.Screen name="Announcement" component={Announcement} />
      <StudentStack.Screen name="Feedback" component={Hostelfeedback} />
      <StudentStack.Screen name="UpdateProfile" component={UpdateProfile} />
      <StudentStack.Screen name="StudentProfile" component={StudentProfile} />
    </StudentStack.Navigator>
  );
};

const WardenStack = createNativeStackNavigator();
const Warden = () => {
  return (
    <WardenStack.Navigator screenOptions={{headerShown: false}}>
      <WardenStack.Screen />
    </WardenStack.Navigator>
  );
};

const AdminStack = createNativeStackNavigator();
const Admin = () => {
  return (
    <AdminStack.Navigator screenOptions={{headerShown: false}}>
      <AdminStack.Screen name="AdminDashboard" component={AdminDashboard} />
      <AdminStack.Screen name="WardenList" component={WardenList} />
      <AdminStack.Screen name="CreateWarden" component={CreateWarden} />
      <AdminStack.Screen name="ViewFeedbacks" component={ViewFeedbacks} />
      <AdminStack.Screen name="AdminProfile" component={AdminProfile} />
      <AdminStack.Screen name="Occupancy" component={Occupancy} />
      <AdminStack.Screen name="UpdateAdminProfile" component={AdminDashboard} />
      <AdminStack.Screen name="UpdateWarden" component={AdminDashboard} />
    </AdminStack.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Splash" component={StartScreen} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

function App() {
  const [route, setRoute] = useState(null);

  getProfile = async () => {
    const res = await AsyncStorage.getItem('authData');
    const data = JSON.parse(res);
    if (data) {
      if (data.role == 'student') {
        setRoute('Student');
      } else if (data.role == 'admin') {
        setRoute('Admin');
      }
    } else setRoute('Auth');
  };

  useEffect(() => {
    getProfile();
  });

  if (!route) return null;

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={route}
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Auth" component={Auth} />
        <MainStack.Screen name="Student" component={Student} />
        <MainStack.Screen name="Warden" component={Warden} />
        <MainStack.Screen name="Admin" component={Admin} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
