
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  Animated, Easing } from 'react-native';
import MainView from '../components/MainView';
import LottieView from 'lottie-react-native';
import { colors } from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import handleErrors from '../utils/errorHandling';

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
    const [errored, setErrored] = useState(false);

    const rippleAnim = useRef(new Animated.Value(0.1)).current
    const fontAnim = useRef(new Animated.Value(RFValue(25))).current

    const [session, setSession] = useState(null)


    const getSession = async () => {
      const value = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')
      return {id: value, token: token}
  }

    useEffect(() => {
        getSession().then((sessionInfo) => {
            setSession(sessionInfo)
            reservationBody.id_cliente = sessionInfo.id
        })
    },[])

    useEffect(() => {
      if (session != null) postReservation({reservationRaw: reservationBody, restaurantId: restaurantId})
    }, [session])

    const postReservation = async ({reservationRaw, restaurantId}) => {

        var raw = JSON.stringify(reservationRaw);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': session.token
            },
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`http://localhost:8080/restaurantes/${restaurantId}/reserva`, requestOptions)
        .then(handleErrors)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            setLoading(false);
            setSuccesful(true);
            sentAnim.current?.play();
        })
        .catch(error => {
            console.log('error', JSON.stringify(error));
            setLoading(false);
            setSuccesful(false);
            setErrored(true);
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
                  navigation.replace('Home')
                })
        }}/>}

        {succesful === false &&
        <LottieView
            style={{position: 'absolute'}}
            source={errorAnimation}
            ref={errorAnim}
            loop={false}
            speed={0.8}
            onAnimationFinish={() => {
              Animated.sequence([                
                Animated.timing(fontAnim, {                      
                toValue: 0.1,
                duration: 150,
                easing: Easing.bounce,
                useNativeDriver: false,
              }),
                Animated.timing(rippleAnim, {                      
                toValue: 150,
                duration: 500,
                easing: Easing.bounce,
                useNativeDriver: false,
              }),
              Animated.timing(rippleAnim, {                      
                toValue: 150,
                duration: 500,
                useNativeDriver: false,
              })]).start(() => {
                navigation.replace('Home', {screenToGo: 'Discovery', statusTheme: 'light-content', topSafeAreaColor: colors.red})
              })
        }}/>}

        <Animated.View style={[styles.ripple, {transform: [{scale: rippleAnim}], backgroundColor: succesful ? colors.red : '#FF413A' }]}/>
        {sent && <Text style={styles.splashText}>Reserva enviada!</Text>}
        {errored && <Animated.Text style={[styles.errorText, {top: '20%', fontSize: fontAnim, zIndex: 1}]}>Ha ocurrrido un error..</Animated.Text>}

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
  errorText: {
    fontFamily: 'Avenir-Heavy',
    color: colors.black,
  }
});

export default ReservationConfirmation;