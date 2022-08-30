import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import DiscoveryView from '../screens/Discovery';
import MyReservationsView from '../screens/MyReservations';
import Map from '../components/Map';
import { foodCategories } from '../utils/categories';
import { colors } from '../utils/colors';
import MainView from '../components/MainView'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const map = require("../../assets/icons/statusBar/map.png")
const mapPressed = require("../../assets/icons/statusBar/map-pressed.png")
const user = require("../../assets/icons/statusBar/user.png")
const userPressed = require("../../assets/icons/statusBar/user-pressed.png")
const reserves = require("../../assets/icons/statusBar/reserves.png")
const reservesPressed = require("../../assets/icons/statusBar/reserves-pressed.png")

const HomeView = ({navigation}) => {
    const [currentScreen, setCurrentScreen] = useState('Discovery');
    const [topColor, setTopColor] = useState(colors.red);
    const [statusTheme, setStatusTheme] = useState('light-content');


    const RenderCurrentView = () => {
        switch(currentScreen){
            case 'User':
                break
            case 'Discovery':
                return(<DiscoveryView navigation={navigation}/>)
            case 'Reservations':
                return(<MyReservationsView navigation={navigation}/>)
        }
    }


    return(
        <MainView statusColor={statusTheme} safeAreaTopColor={topColor} safeAreaBottomColor={colors.red} justify={'flex-end'}>


            {RenderCurrentView()}


            <View style={styles.statusBarView}>
                <View style={styles.statusBar}>
                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('User');
                        setTopColor(colors.red);
                        setStatusTheme('light-content');
                    }}>
                        <Image source={currentScreen == 'User' ? userPressed : user} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Discovery');
                        setTopColor(colors.red);
                        setStatusTheme('light-content');
                    }}>
                        <Image source={currentScreen == 'Discovery' ? mapPressed : map} style={[styles.icon, {marginLeft: '1.5%'}]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Reservations');
                        setTopColor('#F9F6EE');
                        setStatusTheme('dark-content');
                    }}>
                        <Image source={currentScreen == 'Reservations' ? reservesPressed : reserves} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </MainView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.black,
      padding: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0
    },
    discoveryBarView: {
        width: '100%',
        height: '13%',
        backgroundColor: colors.red
    },
    discoveryBar: {
        flexDirection:'row',
        marginTop: RFPercentage(0.1)
    },
    scrollDiscoveryBar: {
        width: '100%',
        height: '13%'  
    },
    categoryButton: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: '20%',
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        fontFamily: 'Aveni-Heavy',
        color: colors.black
    },



    statusBarView: {
        backgroundColor: colors.red,
        width: '100%',
        height: '10%'
    },
    statusBar: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
    icon: {
        aspectRatio: 1,
        height: RFValue(27),
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
    input: {
        width: 300,
        height: 55,
        marginBottom: -10,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
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
    reservationContainer: {
        height: 0.18 * windowHeight,
        width: '95%',
        borderRadius: 6,
        backgroundColor: colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    
  });

export default HomeView;