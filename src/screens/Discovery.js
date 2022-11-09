import React, { useState, useEffect, useRef, Fragment } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Animated, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
//----------------------------------------------------------\\
import Map from '../components/Map';
import { colors } from '../utils/colors';
import { foodCategories } from '../utils/categories';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { verticalScale } from '../utils/scaling';
import handleErrors from '../utils/errorHandling';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DiscoveryView = ({navigation, userId, showStatus, hideStatus}) => {

    const [searchField, setSearchField] = useState('');
    const [placeholder, setPlaceholder] = useState('Buscar..');
    const [restaurants, setRestaurants] = useState([]);
    const [focused, setFocused] = useState(false);
    const [session, setSession] = useState(null);

    const getSession = async () => {
        const value = await AsyncStorage.getItem('user_id')
        const token = await AsyncStorage.getItem('token')
        return {id: value, token: token}
    }


    useEffect(() => {
        getSession().then((session) => {
            setSession(session)
        })
    },[])

    useEffect(() => {
        if (session != null){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'access-token': session.token,
            }
        };
        var param = '';
        fetch(`http://localhost:8080/restaurantes/`, requestOptions)
        .then(handleErrors)
        .then(response => response.json()).then(result => {
                console.log(JSON.stringify(result))
                setRestaurants(result)
        }).catch(error => console.log('error', JSON.stringify(error)));}
    },[session])

    useEffect(() => {
        if (searchField.length > 0){
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                    'access-token': session.token,
                }
            };
            var param = searchField
            if (param == ''){param = '*'}

            fetch(`http://localhost:8080/restaurantes/containing/${param}`, requestOptions)
            .then(handleErrors)
            .then(response => response.json()).then(result => {
                    console.log(JSON.stringify(result))
                    setRestaurants(result)
            }).catch(error => console.log('error', JSON.stringify(error)));
        } 
    },[searchField])

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.discoveryBarView}>
                <View style={styles.discoveryBar}>
                    <View style={styles.searchBarContainer}>
                        <Image source={require("../../assets/icons/discoveryBar/search-regular-24.png")} style={styles.searchIcon} marginHorizontal={'5%'} marginTop={RFPercentage(0.25)}/>
                        <View style={{width: 1.5, height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', position: 'absolute', left: '14.6%'}}/>
                        <View style={{flex: 0.9, justifyContent: 'flex-end', marginLeft: '1%'}}>
                            <TextInput onChangeText={(input) =>{setSearchField(input)}} style={styles.input} 
                            fontSize={RFValue(14)} placeholder={placeholder} placeholderTextColor={colors.black}
                            selectionColor={colors.black}
                            onFocus={() => {
                                hideStatus(); 
                                setFocused(true);
                                setPlaceholder('');
                            }}
                            onBlur={() => {
                                if (searchField == ''){
                                    showStatus(); 
                                    setFocused(false);
                                    setPlaceholder('Buscar..');
                                }
                            }}/>
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

            <Map navigation={navigation} restaurantsMapInfo={restaurants}/>

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
                    <TouchableOpacity key={restaurant.id_restaurante} onPress={() => {
                        navigation.navigate('Restaurant', {restaurant: restaurant, userId: userId})
                    }}>
                        <View style={styles.restaurantContainer}>
                            <View style={styles.restaurantIconContainer}>
                                <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                            </View>

                            <View style={styles.infoRestaurantContainer}>
                                <View style={styles.nameContainer}>
                                    <Text numberOfLines={1} style={{flex: 1,fontSize: RFValue(15), color: colors.black, fontFamily: 'Aveni-HeavyItalic'}}>
                                        {restaurant.nombre}
                                    </Text>

                                    <View style={{width: '15%', height: '110%', borderRadius: 4, position: 'absolute', right: 0, bottom: '25%',
                                    borderWidth: 1, borderColor: colors.black, justifyContent: 'center', flexDirection: 'row'}}>
                                        <View style={{width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center',
                                            marginTop: '3%',
                                        }}>
                                            <Text style={{fontSize: RFValue(12), color: colors.black, fontFamily: 'Aveni-Heavy'}}>
                                                5
                                            </Text>
                                        </View>

                                        <View style={styles.starIconContainer}>
                                            <Image style={styles.starIcon} source={require("../../assets/icons/star-solid.png")}/>
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.descriptionContainer}>
                                    <Text  numberOfLines={2} style={{flex: 1,fontSize: RFValue(11), color: colors.black, fontFamily: 'Aveni-Medium'}}>
                                        {restaurant.descripcion}
                                    </Text>

                                    <View style={{position: 'absolute', backgroundColor: colors.dim_red, width: '100%', height: '5%',
                                    top: '-20%', right: '2%', justifyContent: 'center', alignItems: 'center'}}/>
                                </View>
                            </View>
                            
                        </View>
                    </TouchableOpacity>
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
        alignItems: 'center',
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
        marginTop: RFPercentage(0.25),
        color: colors.black,
        fontFamily: 'Aveni-Medium',
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
        width: verticalScale(19),
        aspectRatio: 1,
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
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    restaurantIconContainer: {
        height: '80%',
        aspectRatio: 1,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: colors.dim_red,
        marginHorizontal: '3%',
        overflow: 'hidden',
    },
    restaurantIcon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    infoRestaurantContainer: {
        width: '74%',
        height: '85%',
        flexDirection: 'column',
    },
    nameContainer: {
        width: '100%',
        height: '25%',
        marginTop: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    descriptionContainer:{
        width: '95%',
        height: '50%',
        marginTop: '3%',
        marginLeft: '-2%',
    },
    starIconContainer: {
        width: '50%',
        height: '100%',
        marginRight: '-5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starIcon: {
        height: '95%',
        aspectRatio: 1
        
    },




    
  });

export default DiscoveryView;