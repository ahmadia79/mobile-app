import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const { startOAuthFlow, isOAuthFlowPending, error } = useOAuth({
    strategy: "oauth_google",
  });

  const onPress = React.useCallback(async () => {
    try {
      await startOAuthFlow();
      // Handle successful login (e.g., navigate to another screen)
    } catch (err) {
      console.error("OAuth error:", err);
      // Handle potential errors during OAuth flow (e.g., display error message)
    }
  }, []);

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('./../../../assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center' }}>
          Let's Find{' '}
          <Text style={{ fontWeight: 'bold' }}>Professional Cleaning and Repair</Text> Service
        </Text>
        <Text style={{ fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20 }}>
          Best app to find services near you which deliver you a professional service
        </Text>
        {isOAuthFlowPending && (
          <Text>Logging in with Google...</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={isOAuthFlowPending}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.PRIMARY }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});