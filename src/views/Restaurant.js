import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//----------------------------------------------------------\\
import { restaurantsMapInfo } from '../utils/coordinates';
import RestaurantInfoView from '../components/RestaurantInfo';
import { colors } from '../utils/colors';

const RestaurantView = ({navigation}) => {




    return(
        <View style={styles.container}>
            <RestaurantInfoView restaurant={restaurantsMapInfo.restaurants[0]} navigation={navigation}/>
            <View style={styles.reserveView}>
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}>Reservar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    reserveView: {
        backgroundColor: colors.black,
        width: '100%',
        height: '8%',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    searchIcon:{
        width: 24,
        height: 24
    },
    line: {
        backgroundColor: colors.white,
        width: 325,
        height: 1
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 350,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 20
    },
  });

export default RestaurantView;