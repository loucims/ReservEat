//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import { StatusBar as StatusBarNative } from 'react-native';
import { colors } from './src/utils/colors';
//----------------------------------------------------\\
import SplashView from './src/views/Splash';
import LogInView from './src/views/LogIn';
import RegisterView from './src/views/Register';
import Map from './src/views/Home';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Map/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0
  }
});

export default App;
