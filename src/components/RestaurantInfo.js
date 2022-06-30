import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//----------------------------------------------------------\\
import RawMap from './BareMap';
import { colors } from '../utils/colors';

const RestaurantInfoView = ({restaurant, navigation}) => {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.restaurantHeader} flexDirection={'row'}>
                <View style={styles.cubeBackground}>
                    <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                </View>
                <View marginTop={40} alignItems={'center'} flexDirection={'column'}>
                    <Text style={styles.title}>Buti Producciones</Text>
                    <View style={styles.line} marginLeft={-10} marginTop={32}/>
                </View>
                <View>
                    <TouchableOpacity style={{width: 40, height: 40, backgroundColor: colors.light_gray, borderRadius: 40/2, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() =>{
                        navigation.goBack();
                    }}
                    >
                        <Image source={require("../../assets/icons/x-icon.png")} style={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View alignItems={'center'}>
                <View style={styles.openTime} marginTop={20} alignItems={'center'} justifyContent={'center'}>
                    <Text style={styles.statusText}>Abierto</Text>
                </View>
                <View style={styles.line} marginLeft={-10} marginTop={-3} marginBottom={10}/>
                <Text style={styles.statusText}>16:00 a Infinidad</Text>
            </View>

            <View style={styles.locationView} marginTop={5}>
                <Text style={styles.categoryText}>Ubicacion</Text>
                <View style={styles.line} width={340} marginBottom={15}/>
                <View flexDirection={'row'} alignItems={'center'}>
                    <View style={styles.locationFrame}>
                        <RawMap restaurant={restaurant} style={styles.location}/>
                    </View>
                    <View width={150} height={100} marginLeft={10}>
                        <Text style={styles.categoryText}>Mitad del Oceano, Arrecife 115, Tercer Acuaducto</Text>
                    </View>
                </View>

            </View>

            <View style={styles.menuView}>

            </View>

            <View style={styles.ratingsView}>

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
    restaurantHeader: {
        padding:30
    },
    cubeBackground: {
        width: 100,
        height: 100,
    },
    restaurantIcon: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: colors.black,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Aveni-Heavy',
        fontSize: 25
    },
    

    openTime: {
        width: 100,
        height: 40,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    statusText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 16
    },  
    timeText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 16
    },  

    locationView: {
        padding: 30
    },
    locationFrame: {
        width: 200,
        height: 190,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.black,
        overflow: 'hidden',
    },
    location: {

    },





    categoryText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 20
    },
    searchIcon:{
        width: 24,
        height: 24
    },
    line: {
        backgroundColor: colors.black,
        width: 250,
        height: 3
    },
    input: {
        width: 300,
        height: 55,
        marginBottom: -10,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
    },
  });

export default RestaurantInfoView;