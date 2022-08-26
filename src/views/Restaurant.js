import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//----------------------------------------------------------\\
import { restaurantsMapInfo } from '../utils/coordinates';
import RestaurantInfoView from '../components/RestaurantInfo';
import RestaurantInfoViewV2 from '../components/RestaurantInfov2';
import { colors } from '../utils/colors';
import MainView from '../components/MainView';
import { scale, verticalScale, moderateScale } from '../utils/scaling';

const RestaurantView = ({navigation}) => {

    return(
        <MainView statusColor={'dark-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.container}>
                <RestaurantInfoViewV2 restaurant={restaurantsMapInfo.restaurants[0]} navigation={navigation}/>
                <View style={styles.reserveView}>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText}>Reservar</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
  });

export default RestaurantView;