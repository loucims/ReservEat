import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location';
//----------------------------------------------------------\\
import { mainMapStyle } from '../utils/mapStyle';
import { colors } from '../utils/colors';

const RawMap = ({restaurant}) => {

    const [initialRegion, setInitialRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1000,
        longitudeDelta: 1000
    });

    useEffect(() =>{
        setInitialRegion({
            latitude: restaurant.cords.latitude,
            longitude: restaurant.cords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        })
    },[]);

    return(
        <MapView provider={PROVIDER_GOOGLE} 
        customMapStyle={mainMapStyle} style={styles.map}
        showsUserLocation={true}
        zoomTapEnabled={false} pitchEnabled={false} rotateEnabled={false} zoomControlEnabled={false} scrollEnabled={false}
        initialRegion={initialRegion}>
            <Marker coordinate={restaurant.cords}/>
        </MapView>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },
    map: {
      width: '100%',
      height: '100%' 
    }
  });

export default RawMap;