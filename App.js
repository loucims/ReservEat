import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar as StatusBarNative } from 'react-native';
import { colors } from './src/utils/colors';
//----------------------------------------------------\\
import SplashView from './src/views/Splash';
import LogInView from './src/views/LogIn';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogInView/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0
  },
});

export default App;
