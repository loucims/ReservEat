import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location';
//----------------------------------------------------------\\
import { restaurantsMapInfo } from '../utils/coordinates';
import { mainMapStyle } from '../utils/mapStyle';
import { colors } from '../utils/colors';

const Map = ({navigation}) => {

    const [initialRegion, setInitialRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1000,
        longitudeDelta: 1000
    });
    const [focusedRegion, setFocusedRegion] = useState(initialRegion);
    const mapView = React.createRef();

    useEffect(() => {
        locateInitialPos();
    },[]);

    useEffect(() =>{
        console.log('animated to')
        console.log(initialRegion)
        mapView.current.animateToRegion(initialRegion, 1000);
    },[initialRegion])

    useEffect(() => {
        mapView.current.animateToRegion(focusedRegion, 200);
    }, [focusedRegion])


    locateInitialPos = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
            console.log("ouch, you really did that to me, i thought we had something");
            return;
        }
        console.log('waiting on pos')
        let currentPos = await Location.getLastKnownPositionAsync()
        console.log('updated pos');
        setInitialRegion({
            latitude: currentPos.coords.latitude,
            longitude: currentPos.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        });
    }   

    const focusOnMarker = (restaurantCoords) => {
        setFocusedRegion({
            latitude: restaurantCoords.latitude,
            longitude: restaurantCoords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        });
    }

    return(
        <MapView 
        ref={mapView}
        provider={PROVIDER_GOOGLE} 
        customMapStyle={mainMapStyle} style={styles.map} 
        showsUserLocation={true} showsMyLocationButton={true}
        initialRegion={initialRegion}>
        {restaurantsMapInfo.restaurants.map(restaurant => (
            <Marker key={restaurant.name} coordinate={restaurant.cords} onPress={() => focusOnMarker(restaurant.cords)}>
                <Callout flexDirection={'row'} alignItems={'center'} onPress={() =>{
                    navigation.navigate("Restaurant", {restaurant});
                }}>
                    <Image source={require("../../assets/testbuti.jpg")} style={styles.icon}/>
                    <Text fontFamily={'Aveni-Heavy'}>{restaurant.name}</Text>
                </Callout>
            </Marker>
        ))}
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
      height: '78%' 
    }
  });

export default Map;