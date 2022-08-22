import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//----------------------------------------------------------\\
import RawMap from './BareMap';
import { colors } from '../utils/colors';
import { scale, verticalScale, moderateScale } from '../utils/scaling';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestaurantInfoViewV2 = ({restaurant, navigation}) => {


    return(
        <ScrollView style={styles.container}>
            
            <ImageBackground style={styles.headerContainer} source={require("../../assets/testbuti.jpg")}>

            
                <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                    <View style={styles.backButtonContainer}>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.iconContainer}>
                            <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.restaurantTitle}>Producciones Buti</Text>
                            <View style={styles.titleLine}/>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>


            <View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    //Background photo of restaurant
    headerContainer: {
        height: 0.2 * windowHeight,
        width: '100%',
        backgroundColor: colors.dim_red,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },
    backButtonContainer: {
        width: 0.05 * windowHeight,
        height: 0.05 * windowHeight,
        backgroundColor: colors.dim_red,
    },
    //Main title
    header: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingBottom: '2%',
    },
    titleContainer: {
        justifyContent: 'flex-end', 
        width: '100%'
    },
    iconContainer: {
        height: 0.12 * windowHeight,
        width: 0.12 * windowHeight,
        borderRadius: 5,
        borderWidth: '3%',
        borderColor: colors.black,
        overflow: 'hidden',
    },
    restaurantIcon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    restaurantTitle: {
        justifyContent: 'flex-end',
        fontFamily: 'Aveni-Heavy',
        fontSize: moderateScale(26, 0.2),
        padding: '1%'
    },
    titleLine: {
        width: '55%',
        height: '2.9%',
        backgroundColor: colors.black,
        marginLeft: '-2%',
    },

    //Information bar
    informationBarContainer: {},
    informationBar: {},
    infoButton: {},



  });

export default RestaurantInfoViewV2;