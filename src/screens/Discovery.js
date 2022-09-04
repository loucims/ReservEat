import React, { useState, useEffect, useRef, Fragment } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Animated, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import Map from '../components/Map';
import { colors } from '../utils/colors';
import { foodCategories } from '../utils/categories';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { verticalScale } from '../utils/scaling';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DiscoveryView = ({navigation, userId, showStatus, hideStatus}) => {

    const [searchField, setSearchField] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        var param = searchField
        if (param == ''){param = '*'}

        fetch(`https://reserv-eat-backend.vercel.app/restaurantes/containing/${param}`, requestOptions)
        .then(response => response.json()).then(result => {
                console.log(result)
                setRestaurants(result)
        }).catch(error => console.log('error', error));
    },[searchField])

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.discoveryBarView}>
                <View style={styles.discoveryBar}>
                    <View style={styles.searchBarContainer}>
                        <Image source={require("../../assets/icons/discoveryBar/search-regular-24.png")} style={styles.searchIcon} marginHorizontal={'5%'} marginTop={RFPercentage(1.5)}/>
                        <View style={{width: 1.5, height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', position: 'absolute', left: '14.6%'}}/>
                        <View style={{flex: 0.9, justifyContent: 'flex-end', marginLeft: '1%'}}>
                            <TextInput onChangeText={(input) =>{setSearchField(input)}} style={styles.input} 
                            fontSize={RFValue(15)} placeholder="Buscar.." placeholderTextColor={colors.black}
                            selectionColor={colors.black}
                            onFocus={() => {hideStatus(); setFocused(true);}}
                            onBlur={() => {showStatus(); setFocused(false);}}/>
                        </View>
                    </View>
                </View>

                <View style={styles.scrollContainer}>
                    <ScrollView style={styles.scrollDiscoveryBar} horizontal={true} alignItems={'center'} showsHorizontalScrollIndicator={false}>
                        {foodCategories.categories.map(category =>(
                            <TouchableOpacity key={category.name} style={{width: windowWidth * 0.21, height: verticalScale(21), backgroundColor: colors.white,
                            borderRadius: 50, justifyContent: 'center', marginHorizontal: 5}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.category, {textAlign: 'center'}]}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            
            </View>

            <Map navigation={navigation}/>

            {focused && (
            <View style={{top: '13%', bottom: 0, left: 0, right: 0, backgroundColor: colors.bone, position: 'absolute', height: '100%'}}>

                {restaurants.length === 0 ?  
                <Text style={{fontSize: RFValue(15), color: colors.gray, textAlign: 'center', 
                marginTop: '10%', fontFamily: 'Aveni-Heavy'}}>
                    {searchField === '' ? 'Busca tu restaurante favorito!' : 'No hay restaurantes que coincidan con tu búsqueda'}
                </Text>
                : 
                <ScrollView>

                    <View style={{height: 10, width: '100%'}}/>
                    {restaurants.map(restaurant => (
                    <View key={restaurant.id_restaurante} style={styles.restaurantContainer}>
                        
                    </View>
                    ))}

                </ScrollView>}
            </View>)}

        </View>
    )
}

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
        marginTop: RFPercentage(0.1),
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBarContainer: {
        flexDirection: 'row',
        width: '95%',
        height: '95%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.black,
        backgroundColor: colors.bone,
    },
    
    scrollContainer: {
        flex: 1
    },
    scrollDiscoveryBar: {
        flex: 1
    },
    input: {
        width: '105%',
        height: '90%',
        color: colors.black,
        fontFamily: 'Aveni-Medium'
    },
    categoryButton: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: windowWidth * 0.2,
        height: '85%',
        marginHorizontal: 5,
    },
    category: {
        fontFamily: 'Aveni-Heavy',
        color: colors.black
    },
    searchIcon:{
        width: verticalScale(20),
        height: verticalScale(20)
        //26
    },
    line: {
        backgroundColor: colors.black,
        width: "100%",
        marginBottom: '0.5%',
        height: 1
    },


    //Restaurants
    restaurantContainer: {
        height: 0.1 * windowHeight,
        width: '95%',
        marginBottom: '3.5%',
        borderRadius: 6,
        backgroundColor: colors.white,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    restaurantBackground: {
        width: '100%',
        height: 0.05 * windowHeight,
       // resizeMode: 'contain',
    },
    restaurantIconContainer: {

    },
    restaurantIcon: {},
    nameContainer: {},
    nameLine: {},
    descriptionContainer:{},





    
  });

export default DiscoveryView;