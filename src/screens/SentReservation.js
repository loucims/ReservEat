
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  Animated, Easing } from 'react-native';
import MainView from '../components/MainView';
import LottieView from 'lottie-react-native';
import { colors } from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';

const errorAnimation = require('../../assets/animations/error.json')
const sendAnimation = require('../../assets/animations/sent-reservation.json')
const loadAnimation = require('../../assets/animations/loading.json')

const ReservationConfirmation = ({ route, navigation }) => { 

    const sentAnim = useRef(null);
    const errorAnim = useRef(null);
    const loadAnim = useRef(null);


    const { reservationBody, restaurantId } = route.params;
    const [succesful, setSuccesful] = useState();
    const [loading, setLoading] = useState(true);
    const [sent, setSent] = useState(false);

    const rippleAnim = useRef(new Animated.Value(0.1)).current

    useEffect(() => {
        postReservation({reservationRaw: reservationBody, restaurantId: restaurantId})
    },[])

    const postReservation = async ({reservationRaw, restaurantId}) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(reservationRaw);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`https://reserv-eat-backend.vercel.app/restaurantes/${restaurantId}/reserva`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setLoading(false);
            console.log(result);
            setSuccesful(true);
            sentAnim.current?.play();
        })
        .catch(error => {
            setLoading(false);
            console.log('error', error);
            setSuccesful(false);
            errorAnim.current?.play();
        });
    }


  return (
    <MainView statusColor={'dark-content'} safeAreaTopColor={colors.white} safeAreaBottomColor={colors.white}>
      <View style={styles.container}>

        {loading &&
        <LottieView 
            style={{position: 'absolute'}}
            source={loadAnimation} 
            ref={loadAnim}
            loop
            autoPlay
            speed={1}
            onAnimationFinish={() => {

            }}
        />}

        {succesful === true &&
        <LottieView
            style={{position: 'absolute'}}
            source={sendAnimation}
            ref={sentAnim}
            loop={false}
            speed={1.5}
            onAnimationFinish={() => {
                setSent(true)
                Animated.sequence([
                  Animated.timing(rippleAnim, {                      
                  toValue: 150,
                  duration: 500,
                  easing: Easing.bouncer,
                  useNativeDriver: false,
                }),
                Animated.timing(rippleAnim, {                      
                  toValue: 150,
                  duration: 1000,
                  useNativeDriver: false,
                }),
                Animated.timing(rippleAnim, {                      
                  toValue: 0.1,
                  duration: 500,
                  easing: Easing.bouncer,
                  useNativeDriver: false,
                })]).start(() => {
                  navigation.replace('Home', {screenToGo: 'Reservations'})
                })
        }}/>}

        {succesful === false &&
        <LottieView
            style={{position: 'absolute'}}
            source={errorAnimation}
            ref={errorAnim}
            loop={true}
            speed={0.5}
            onAnimationFinish={() => {

        }}/>}

        <Animated.View style={[styles.ripple, {transform: [{scale: rippleAnim}]}]}/>
        {sent && <Text style={styles.splashText}>Reserva enviada!</Text>}

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
  ripple: {
    height: '1.15%',
    aspectRatio: 1,
    position: 'absolute',
    borderRadius: 12.5,
    backgroundColor: colors.red
  },
  splashText: {
    fontSize: RFValue(25),
    fontFamily: 'Avenir-Heavy',
    color: colors.white,
  },
});

export default ReservationConfirmation;