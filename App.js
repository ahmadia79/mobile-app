import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import Navigator from './App/Navigations/Navigator';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // Ensure this path points to your Firebase configuration
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  const [user, setUser] = useState(null);
  const auth = getAuth(); // Initialize Firebase Auth

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in, null if logged out
    });
    return () => unsubscribe(); // Clean up subscription
  }, []);

  const handleAuthentication = async (isLogin, email, password, navigation) => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
        navigation.navigate('Welcome');  // Navigate to TabNavigation
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully!');
        navigation.navigate('Welcome');  // Navigate to TabNavigation
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };
  
  const handleLogout = async (navigation) => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigation.replace('Login');  // Use navigation.replace to clear the navigation stack
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return <Navigator user={user} handleAuthentication={handleAuthentication} handleLogout={handleLogout} />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
