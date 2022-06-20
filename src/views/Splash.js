import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

const SplashView = ({ navigation }) =>{
  
  delayId = setTimeout(() =>{
    navigation.navigate("LogIn")
  }, 3000)

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>ReservEat</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 40,
    fontFamily: 'Avenir-Heavy',
    color: colors.black
  }
});

export default SplashView;