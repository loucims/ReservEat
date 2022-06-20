import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useFonts } from 'expo-font';
import * as Location from 'expo-location';
//----------------------------------------------------------\\
import { mainMapStyle } from '../utils/mapStyle';
import { colors } from '../utils/colors';

const Map = () => {

    useEffect(() => {
        locateCurrentPos();
    },[]);

    const [position, setPosition] = useState({});

    locateCurrentPos = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
            console.log("ouch, you really did that to me, i thought we had something");
            return;
        }
        /*Location.watchPositionAsync({
            accuracy: Location.Accuracy.High,
            distanceInterval: 2
        }, locationObj =>{
            console.log(locationObj);
            setLocation(locationObj);
        });*/
        let loc = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
        Object.keys(position).length ? console.log('true') : console.log('false')
        console.log(position.keys)
        setPosition(loc);
        
        console.log(position.keys)
        Object.keys(position).length > 0 ? console.log('true') : console.log('false')
    }

    return(
        <View style={styles.container}>
            <MapView 
            provider={PROVIDER_GOOGLE} 
            customMapStyle={mainMapStyle} style={styles.map} 
            showsUserLocation={true} showsMyLocationButton={true} 
            initialRegion={position ? {latitude: 0, longitude:0, latitudeDelta: 0, longitudeDelta: 0} : {}}>

            </MapView>
            <View style={styles.statusBarView}>
                <View style={styles.statusBar}>
                    <Image source={require("../../assets/icons/statusBar/map.png")} style={styles.icon}/>
                    <Image source={require("../../assets/icons/statusBar/reserves.png")} style={styles.icon}/>
                    <Image source={require("../../assets/icons/statusBar/user.png")} style={styles.icon}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: '90%' 
    },
    statusBarView: {
        backgroundColor: colors.black,
        width: '100%',
        height: '100%',
    },
    statusBar: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: 25
    },
    icon: {
        width: 30,
        height: 30
    }
  });

export default Map;