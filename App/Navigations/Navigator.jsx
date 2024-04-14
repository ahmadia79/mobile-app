// Navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/LoginScreen/Login';
import SignUp from '../Screens/LoginScreen/SignUp';
import Welcome from '../Screens/LoginScreen/Welcome';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import TabNavigation from './TabNavigation'; // Make sure the path is correct

const Stack = createStackNavigator();

const Navigator = ({ user, handleAuthentication, handleLogout }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <Login {...props} handleAuthentication={handleAuthentication} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} handleAuthentication={handleAuthentication} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome">
          {props => <Welcome {...props} user={user} handleLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen name="home">
          {props => <HomeScreen {...props} user={user} handleLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen name="Main" component={TabNavigation} options={{ headerShown: false }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;