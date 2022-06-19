import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { colors } from '../utils/colors';
import { useFonts } from 'expo-font';
import { mainMapStyle } from '../utils/mapStyle';

const Map = () => {
    return(
        <View style={styles.container}>
            <MapView provider={PROVIDER_GOOGLE} customMapStyle={mainMapStyle} style={styles.map}>

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