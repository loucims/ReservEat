import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
//import { Picker, DatePicker } from 'react-native-wheel-pick';
//import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import { PickerTime, DropdownList } from 'react-native-ultimate-modal-picker';

//----------------------------------------------------------\\
import { restaurantsMapInfo } from '../utils/coordinates';
import RestaurantInfoViewV2 from '../components/RestaurantInfov2';
import { colors } from '../utils/colors';
import MainView from '../components/MainView';
import { scale, verticalScale, moderateScale } from '../utils/scaling';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestaurantView = ({navigation}) => {
    
    const modal = useRef();
    const [time, setTime] = useState(new Date());
    const [ listValue, setListValue ] = useState('');
    const items = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8+', value: '8+' },
      ];
    
    return(
        <MainView statusColor={'dark-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.container}>
                <RestaurantInfoViewV2 restaurant={restaurantsMapInfo.restaurants[0]} navigation={navigation}/>
                <View style={styles.reserveView}>
                    <TouchableOpacity style={styles.button} onPress={() => {modal.current.showFull()}}> 
                        <Text style={styles.buttonText}>Reservar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            <SwipeUpDown
                itemFull={(close) => (
                    <View style={styles.reservationView}>
                        <Text style={{fontFamily: 'Aveni-Heavy', fontSize: scale(30), marginTop: '5%', marginBottom: '2%'}}>Tu Reserva</Text>
                            <View style={{backgroundColor: colors.black, width: '80%', height: '0.1%', marginBottom: '15%'}}/>
                            <PickerTime
                            title="Hora y fecha"
                            onChange={(date) => setTime(date)}
                            mode="spinner"         
                            customStyleLabelText={{
                                labelTextLight: {
                                  fontFamily: 'Aveni-Heavy',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'none',
                                  color: colors.black,
                                },
                                labelTextDark: {
                                  fontFamily: 'Aveni-Heavy',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'none',
                                  color: colors.black,
                                },
                            }}
                            />
                            <View style={{width: '100%', height: '3%'}}/>
                            <DropdownList
                            title="Numero de personas"
                            items={items}
                            onChange={(value) => setListValue(value)}
                            customStyleLabelText={{
                                labelTextLight: {
                                  fontFamily: 'Aveni-Heavy',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'none',
                                  color: colors.black,
                                },
                                labelTextDark: {
                                  fontFamily: 'Aveni-Heavy',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'none',
                                  color: colors.black,
                                },
                            }}
                            customStyleFieldText={{
                                fieldTextLight: {
                                  fontFamily: 'Aveni-Regular',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'lowercase',
                                  color: colors.black,
                                },
                                fieldTextDark: {
                                  fontFamily: 'Aveni-Regular',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  textTransform: 'lowercase',
                                  color: colors.black,
                                },
                              }}
                              customStyleCancelText={{
                                cancelTextLight: {
                                  fontFamily: 'Aveni-Medium',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  color: colors.black,
                                },
                                cancelTextDark: {
                                  fontFamily: 'Aveni-Medium',
                                  fontSize: 22,
                                  fontWeight: '800',
                                  color: colors.black,
                                },
                              }}
                              customStyleDoneText={{
                                doneTextLight: {
                                    fontFamily: 'Aveni-Medium',
                                    fontSize: 22,
                                    fontWeight: '800',
                                    color: colors.black,
                                },
                                doneTextDark: {
                                    fontFamily: 'Aveni-Medium',
                                    fontSize: 22,
                                    fontWeight: '800',
                                    color: colors.black,
                                },
                              }}/>
                            <View style={{width: '100%', height: '3%'}}/>
                            <Text style={{
                                fontFamily: 'Aveni-Heavy',
                                fontSize: 22,
                                fontWeight: '800',
                                color: colors.black,
                                alignSelf: 'flex-start',
                                marginLeft: '6%',
                                marginBottom: '4%'
                            }}
                            > 
                                Aclaraciones
                            </Text>
                            <View style={{borderWidth: 1, width: '90%', height: '20%', justifyContent: 'flex-start', alignItems: 'flex-start', borderRadius: 8, borderColor: colors.gray}}>
                                <TextInput style={[styles.textInput, {fontSize: 20}]} multiline={true} 
                                    selectionColor={colors.black}
                                    blurOnSubmit={true}
                                    placeholder={'Algo que aclarar?'}
                                    placeholderTextColor={colors.gray}>
                                </TextInput>
                            </View>

                            <TouchableOpacity style={styles.confirmButton}> 
                                <Text style={[styles.buttonText, {color: colors.white}]}>Confirmar reserva</Text>
                            </TouchableOpacity>
                    </View>
                  )}
                animation="spring"
                disableSwipeIcon
                extraMarginTop={24}
                iconColor='yellow'
                iconSize={30}
                ref={modal}
                style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderTopRightRadius: 40, borderTopLeftRadius: 40,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 20,  
                elevation: 5}} // style for swipe
            />
            
        </MainView>
    );
}

const styles = StyleSheet.create({
    //Basic layout
    container: {
      flex: 1,
      alignItems: 'center',
    },
    reserveView: {
        backgroundColor: colors.red,
        width: '100%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 15,
        width: '85%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: moderateScale(20, 0.3) 
    },

    //Reservation layout
    reservationView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        height: '100%',
        fontFamily: 'Aveni-Medium',
        fontSize: 19,
        color: colors.black,
    },
    confirmButton: {
        backgroundColor: colors.red,
        borderRadius: 15,
        width: '80%',
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: '25%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 2,  
        elevation: 5
    },

  });

export default RestaurantView;