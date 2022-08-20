import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from '../components/MainView';
import { colors } from '../utils/colors';

const SplashView = ({ navigation }) =>{
  
  delayId = setTimeout(() =>{
    navigation.navigate("LogIn")
  }, 3000)

  return (
    <MainView statusColor={'light-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
      <View style={styles.container}>
        <Text style={styles.splashText}>ReservEat</Text>
      </View>
    </MainView>
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