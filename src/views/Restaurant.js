import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import { Picker, DatePicker } from 'react-native-wheel-pick';
//----------------------------------------------------------\\
import { restaurantsMapInfo } from '../utils/coordinates';
import RestaurantInfoView from '../components/RestaurantInfo';
import RestaurantInfoViewV2 from '../components/RestaurantInfov2';
import { colors } from '../utils/colors';
import MainView from '../components/MainView';
import { scale, verticalScale, moderateScale } from '../utils/scaling';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestaurantView = ({navigation}) => {

    // const [modalVisible, setModalVisible] = useState(false);
    // const [transparencyVisible, setTransparencyVisible] = useState(false);
    // const [dimensions, setDimensions] = useState({width:0, height:0});
    
    const modal = useRef();
    // const title = useRef();


    // const RenderTransparentView = () => {
    //     if (transparencyVisible === true) {
    //         return (<View style={styles.transparentView}/>);
    //     } else {
    //         return null;
    //     }
    // };

    return(
        <MainView statusColor={'dark-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.container}>
                <RestaurantInfoViewV2 restaurant={restaurantsMapInfo.restaurants[0]} navigation={navigation}/>
                <View style={styles.reserveView}>
                    <TouchableOpacity style={styles.button} onPress={() => {modal.current.showFull()}}> 
                        <Text style={styles.buttonText}>Reservar</Text>
                    </TouchableOpacity>
                </View>
                
                {/* {RenderTransparentView()} */}
            </View>

            
            <SwipeUpDown
                itemFull={(close) => (
                    <View style={styles.reservationView}>
                        <Text style={{fontFamily: 'Aveni-Heavy', fontSize: scale(30), marginTop: '5%'}}>Tu Reserva</Text>
                        <TouchableWithoutFeedback>
                            <Picker
                            style={{ backgroundColor: 'white', width: '20%'}}
                            pickerData={['1', '2', '3', '4', '5', '6', '7']}
                            onValueChange={value => { console.log(value) }}
                            />
                        </TouchableWithoutFeedback>

                    </View>
                  )}
                animation="spring"
                disableSwipeIcon
                extraMarginTop={24}
                iconColor='yellow'
                iconSize={30}
                ref={modal}
                style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} // style for swipe
                />
            
        </MainView>
    );
}

const styles = StyleSheet.create({
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
        width: '60%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: moderateScale(20, 0.3) 
    },

    reservationView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    modalView: {
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    transparentView: {
        position: 'absolute', 
        width: windowWidth, 
        height: windowHeight + 200, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        top: -100
    },
  });

export default RestaurantView;