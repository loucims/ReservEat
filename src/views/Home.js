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
            <View style={styles.statusBar}>
                <Image source={require("../../assets/icons/Location and Map/map.png")} width={40} height={40}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: '90%' 
    },
    statusBar: {
        backgroundColor: colors.black,
        width: '100%',
        height: '100%',
        flexDirection:'row',
        justifyContent: 'space-evenly'
    }
  });

export default Map;