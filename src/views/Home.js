import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [bottomColor, setBottomColor] = useState(colors.red);
    const [statusTheme, setStatusTheme] = useState('light-content');
    const [user_id, setUser_id] = useState(null);

    const [hidesStatusBar, setHidesStatusBar] = useState(false);

    useEffect(() => {
        getData('user_id')
    },[])

    const getData = async (key) => {
        try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
            setUser_id(parseInt(value))
            console.log(value)
            // value previously stored
        }
        } catch(e) {
            console.log(e)
        // error reading value
        }
    }

    const RenderCurrentView = () => {
        switch(currentScreen){
            case 'User':
                break
            case 'Discovery':
                return(<DiscoveryView userId={user_id} navigation={navigation} showStatus={showStatusBar} hideStatus={hideStatusBar}/>)
            case 'Reservations':
                return(<MyReservationsView userId={user_id} navigation={navigation}/>)
        }
    }

    const hideStatusBar = () => {
        setHidesStatusBar(true);
        setBottomColor(colors.bone);
    }

    const showStatusBar = () => {
        setHidesStatusBar(false);
        setBottomColor(colors.red);
    }


    return(
        <MainView statusColor={statusTheme} safeAreaTopColor={topColor} safeAreaBottomColor={bottomColor} justify={'flex-end'}>


            {RenderCurrentView()}

            <View style={[styles.statusBarView, {opacity: hidesStatusBar ? 0 : 1}]}>
                <View style={styles.statusBar}>
                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('User');
                        setTopColor(colors.red);
                        setStatusTheme('light-content');
                    }} disabled={hidesStatusBar}>
                        <Image source={currentScreen == 'User' ? userPressed : user} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Discovery');
                        setTopColor(colors.red);
                        setStatusTheme('light-content');
                    }} disabled={hidesStatusBar}>
                        <Image source={currentScreen == 'Discovery' ? mapPressed : map} style={[styles.icon, {marginLeft: '1.5%'}]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Reservations');
                        setTopColor('#F9F6EE');
                        setStatusTheme('dark-content');
                    }} disabled={hidesStatusBar}>
                        <Image source={currentScreen == 'Reservations' ? reservesPressed : reserves} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>

        </MainView>
    );
};

const styles = StyleSheet.create({
    statusBarView: {
        backgroundColor: colors.red,
        width: '100%',
        height: '10%',
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
    touchableButton: {
        
    }

});

export default HomeView;