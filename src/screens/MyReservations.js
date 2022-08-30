import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import { colors } from '../utils/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const MyReservationsView = () => {

    const [reservations, setReservations] = useState();

    useEffect(() => {
        GetReservations({id: 1})

    }
    ,[])


    const GetReservations = ({id}) => {
        //Get request to get reservations given the user id
        fetch(`http://localhost:8080/clientes/${id}/reservas`, {
                method: 'GET',
                body: '',
                redirect: 'follow'
        }).then(response => response.json()).then(result => {
            console.log(result)
            setReservations(result)
        }).catch(error => {
            console.log('error',error)
        })
    }

    const stringToTime = (stringDate) => {
        let date = new Date(stringDate);
        console.log(date.toLocaleTimeString('es-AR'));
    }




    return (
        <View style={[styles.container, {backgroundColor: '#F9F6EE', }]}>
            <View style={styles.titleContainer}>
                <View style={styles.titleLine}/>
                <Text style={styles.title}>Mis Reservas</Text>
                <View style={styles.titleLine}/>
            </View>



            <ScrollView style={styles.reservationScroll}>
                <View style={{width: '100%', height: '4%'}}/>
                {reservations ? reservations.map(reservation => (
                <View style={styles.reservationContainer} key={reservation.id_reserva}>

                    <View style={[styles.restaurantFrame, {marginLeft: '2.5%'}]}>
                        <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantImage}/>
                    </View>

                    <View style={{backgroundColor: colors.white, width: '70%', height: '90%', flexDirection: 'column'}}>

                    
                        <View style={{width: '95%', height: '20%', borderBottomWidth: 2, marginTop: '5.5%'}}>
                            <Text adjustsFontSizeToFit numberOfLines={2} style={[styles.heavyText,
                            {
                                width: '90%',
                                marginLeft: '2%'
                            }
                            ]}>
                                Reserva n* {reservation.id_reserva}
                            </Text>
                        </View>

                        <View style={{flex: 1}}>
                            <View style={{width: '100%', height: '8%'}}/>
                            <View style={styles.textRow}>
                                <Text style={[styles.mediumText, {width: '45%', marginLeft: '2%'}]}>
                                    Hora: {stringToTime(reservation.hora_reserva)}
                                </Text>
                                <Text style={[styles.mediumText, {width: '60%', marginLeft: '2%'}]}>
                                    Fecha: 04/04/2020
                                </Text>
                            </View>
                            <View style={{width: '100%', height: '10%'}}/>
                            <View style={styles.textRow}>
                                <Text style={[styles.mediumText, {width: '45%', marginLeft: '2%'}]}>
                                    N* de sillas: 1
                                </Text>
                                <Text style={[styles.mediumText, {width: '55%', marginLeft: '2%'}]}>
                                    Estado: Aceptada
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
                )) : null}

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.black
    },
   
    //Reservations
    titleContainer: {
        width: '100%',
        height: '10%',
        marginTop: '5%',
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 1,  
        elevation: 5,
    },
    title: {
        fontFamily: 'Aveni-Heavy',
        color: colors.white,
        fontSize: RFValue(20),
        marginHorizontal: '2%'
    },
    titleLine: {
        width: '25%',
        height: '3%',
        backgroundColor: colors.white,
    },
    reservationScroll: {
        flexGrow: 1,
        width: '100%',
    },
    reservationContainer: {
        height: 0.15 * windowHeight,
        width: '95%',
        marginBottom: '3.5%',
        borderRadius: 6,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    restaurantFrame: {
        height: 0.10 * windowHeight,
        aspectRatio: 1,
        borderRadius: 5,
        borderWidth: '3%',
        borderColor: colors.black,
        overflow: 'hidden',
    },
    restaurantImage: {        
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    textRow: {
        flexDirection: 'row',
        width: '95%', 
        height: '20%',
        marginTop: '2%'
    },
    heavyText: {
        fontFamily: 'Aveni-Heavy',
        color: colors.black,
        fontSize: RFValue(15),
    },    
    mediumText: {
        fontFamily: 'Aveni-Medium',
        color: colors.black,
        fontSize: RFValue(14),
    },
    
  });

export default MyReservationsView;