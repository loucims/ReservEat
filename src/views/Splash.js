import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  Animated } from 'react-native';
import MainView from '../components/MainView';
import LottieView from 'lottie-react-native';
import { colors } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

const SplashView = ({ navigation }) =>{

  const zoomAnim = useRef(new Animated.Value(5)).current

  useEffect(() => {
    Animated.timing(
      zoomAnim,
      {
        toValue: RFValue(35),
        duration: 700,
        useNativeDriver: false
      }
    ).start();
  }, [zoomAnim])

  return (
    <MainView statusColor={'dark-content'} safeAreaTopColor={colors.white} safeAreaBottomColor={colors.white}>
      <View style={styles.container}>
        <Animated.Text style={[styles.splashText, {fontSize: zoomAnim}]}>ReservEat!</Animated.Text>
        <LottieView
        style={{position: 'absolute', top: '17%'}}
        source={require('../../assets/animations/splash.json')}
        autoPlay
        loop={false}
        speed={0.9}
        onAnimationFinish={() => {
          navigation.navigate("LogIn")
        }}
        />
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
    fontFamily: 'Avenir-Heavy',
    color: colors.dim_black
  }
});

export default SplashView;