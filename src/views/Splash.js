import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  Animated } from 'react-native';
import MainView from '../components/MainView';
import LottieView from 'lottie-react-native';
import { colors } from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import handleErrors from '../utils/errorHandling';

const SplashView = ({ navigation }) =>{

  const [nextScreen, setNextScreen] = useState('LogIn')

  const zoomAnim = useRef(new Animated.Value(5)).current

  useEffect(() => {
    getPersistentSession('user_id').then(screenToGo => {
      setNextScreen(screenToGo)
    })
  },[])

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

  const getPersistentSession = async () => {
    try {
      const value = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')
      if(value !== null && token !== null) {
          console.log("user_id logged: " + value)
          console.log("token logged " + token)

          var requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'access-token': token
            },
            redirect: 'follow'
          };
          return await fetch(`http://localhost:8080/clientes/${value}`, requestOptions)
          .then(handleErrors)
          .then(response => response.json())
          .then(result => {
            console.log("Recovered session")
            return 'Home'
            // value previously stored, and has connectivity
          })
          .catch(error => {
            console.log('error fetching info: ', JSON.stringify(error));
            return 'LogIn'
          });

      } else {
          console.log("user_id or token not logged")
          return 'LogIn'
          // value not there
      }
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }



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
          navigation.navigate(nextScreen)
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