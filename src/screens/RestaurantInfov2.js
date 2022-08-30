import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//----------------------------------------------------------\\
import RawMap from '../components/BareMap';
import { menuItems } from '../utils/menuItems';
import { colors } from '../utils/colors';
import { scale, verticalScale, moderateScale } from '../utils/scaling';
import { restaurantsMapInfo } from '../utils/coordinates';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestaurantInfoViewV2 = ({restaurant, navigation}) => {

    const [currentScreen, setCurrentScreen] = useState(1)

    const RenderCurrentView = () => {
        switch(currentScreen) {
            case 1:
                return(
                <>
                    {menuItems.items.map(item => (
                    <View key={item.name} style={styles.menuItemContainer}>
                        <View style={[styles.header, {flexDirection: 'row', paddingBottom: '0%'}]}>
                            <View style={[styles.iconContainer , {borderColor: colors.red}]}>
                                <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                            </View>
    
                            <View style={[styles.titleLine , {backgroundColor: colors.red, width: '80%', position: 'absolute', left: '20%', top:'97.3%'}]}/>
                            <View style={{flex: 1}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontFamily: 'Aveni-Heavy',fontSize: scale(15), paddingLeft: '4%', paddingTop: '2/3%', paddingBottom: '1.3%'}}>
                                    {item.name}
                                </Text>
    
                                <Text adjustsFontSizeToFit numberOfLines={3} style={{fontFamily: 'Aveni-Medium',fontSize: scale(13), paddingLeft: '4%'}}>
                                    {item.descripcion}
                                </Text>
                                <Text adjustsFontSizeToFit  numberOfLines={1} style={{fontFamily: 'Aveni-Heavy',fontSize: scale(13), alignSelf: 'flex-end', marginTop: 'auto', padding: '2%', paddingRight: '5%'}}>
                                    1000$
                                </Text>
                            </View>
                        </View>
                    </View>))}
                    <View style={{height: 10}}/>
                </>
                )
            case 2:
                return (
                    <View style={styles.locationContainer} pointerEvents='none'>
                        <RawMap restaurant={restaurant} style={styles.location}/>
                        <View style={[styles.locationInfoContainer]}>
                            <View style={{width: '95%', height: '90%', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                                <View style={{backgroundColor: colors.white, width: ' 100%', height: '45%', flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{backgroundColor: colors.black, height: '90%', aspectRatio: 1, marginRight: '5%'}} source={require("../../assets/icons/statusBar/map-pressed.png")}>
                                        <Image source={require("../../assets/icons/statusBar/map-pressed.png")} style={{
                                            flex: 1,
                                            width: null,
                                            height: null,
                                            resizeMode: 'contain',
                                        }}/>
                                    </View>
                                    <Text style={{
                                        fontFamily: 'Aveni-Medium',
                                        fontSize: scale(16),
                                        color: colors.black,

                                    }} adjustsFontSizeToFit numberOfLines={1}>
                                        Butilandia, Calle Loucim, 751
                                    </Text>
                                </View>
                                <View style={{backgroundColor: colors.white, width: ' 100%', height: '45%', flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{backgroundColor: colors.black, height: '90%', aspectRatio: 1, marginRight: '5%'}} source={require("../../assets/icons/statusBar/map-pressed.png")}>
                                            <Image source={require("../../assets/icons/statusBar/reserves-pressed.png")} style={{
                                                flex: 1,
                                                width: null,
                                                height: null,
                                                resizeMode: 'contain',
                                            }}/>
                                        </View>
                                        <Text style={{
                                            fontFamily: 'Aveni-Medium',
                                            fontSize: scale(16),
                                            color: colors.black,

                                        }} adjustsFontSizeToFit numberOfLines={1}>
                                            +54 9 11 3510-0505
                                        </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            case 3:
                return (
                <View style={styles.ratingsContainer}>
                    <Image style={[styles.starIcon,{backgroundColor: colors.black}]}/>
                    <View style={styles.ratingTextContainer}>
                        <Text style={styles.ratings}>
                            4,5
                        </Text>
                    </View>

                </View>)
            
        }

            
    }



    return(
        <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
            
            <ImageBackground style={styles.headerContainer} source={require("../../assets/testbuti.jpg")}>
                <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)']} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>

                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity style={{width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 99, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() =>{navigation.goBack();}}>
                            <Image source={require("../../assets/icons/left-arrow.png")} style={{width: scale(10), height: scale(15)}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.header}>
                        <View style={styles.iconContainer}>
                            <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.restaurantTitle}>Producciones Buti</Text>
                            <View style={styles.titleLine}/>
                        </View>
                    </View>

                </LinearGradient>
            </ImageBackground>


            <View style={styles.informationBarContainer}>
                <View style={styles.informationBar}>
                    <View style={[styles.infoSection, {borderRightWidth: 0.5, borderColor: '#999999'}]}>
                        <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(17, 0.2)}}>
                            Abierto
                        </Text>
                    </View>
                    <View style={styles.infoSection}>
                        <Text style={{fontFamily: 'Aveni-Medium',fontSize: moderateScale(15, 0.2)}}>
                            Cierra a las tal y tal
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonBarContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen(1)}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Menu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen(2)}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Ubicacion
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen(3)}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Ratings
                    </Text>
                </TouchableOpacity>
            </View>
            {RenderCurrentView()}

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.light_gray
    },


    //Background photo of restaurant
    headerContainer: {
        height: 0.2 * windowHeight,
        width: '100%',
        backgroundColor: colors.dim_red,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },
    backButtonContainer: {
        width: 0.04 * windowHeight,
        height: 0.04 * windowHeight,
        alignSelf: 'flex-start',
        marginBottom: 'auto',
        marginTop: '2%',
        marginLeft: '2%'
    },


    //Main title
    header: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        paddingBottom: '2%',
    },
    titleContainer: {
        justifyContent: 'flex-end', 
        width: '100%'
    },
    iconContainer: {
        height: 0.12 * windowHeight,
        width: 0.12 * windowHeight,
        borderRadius: 5,
        borderWidth: '3%',
        borderColor: colors.white,
        overflow: 'hidden',
    },
    restaurantIcon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    restaurantTitle: {
        justifyContent: 'flex-end',
        fontFamily: 'Aveni-Heavy',
        fontSize: moderateScale(26, 0.2),
        padding: '1%',
        color: colors.white,
    },
    titleLine: {
        width: '70%',
        height: '2.8%',
        backgroundColor: colors.white,
        marginLeft: '-2%',
    },

    //Information bar
    informationBarContainer: {
        height: 0.095 * windowHeight,
        width: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    informationBar: {
        backgroundColor: colors.white,
        borderColor: '#999999',
        borderWidth: 0.5,
        borderRadius: 15,
        width: '85%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    infoSection: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    //Button bar
    buttonBarContainer: {
        height: 0.075 * windowHeight,
        width: '100%',
        backgroundColor: colors.red,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 10,
        width: '30%',
        height: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },

    //Menu items
    menuItemContainer: {
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
    itemInfoContainer: { 
        width: '70%',
    },
    infoContainer: {
        width: '100%', 
        height: 0.12 * windowHeight,

    },


    //Location of restaurant
    locationContainer: {
        height: 0.75 * windowHeight,
        width: '100%',
        justifyContent: 'flex-end'
    },
    locationInfoContainer: {
        position: 'absolute',
        height: 0.125 * windowHeight,
        width: '95%',
        borderRadius: 6,
        backgroundColor: colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: '5.5%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },


    //Ratings of restaurant
    ratingsContainer: {
        height: 0.3 * windowHeight,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        marginTop: '3%',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    starIcon: {
        height: '70%',
        aspectRatio: 1,
        marginRight: '5%'
    },
    ratingTextContainer: {
        width: '45%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratings: {
        fontFamily: 'Aveni-Heavy',
        fontSize: moderateScale(50, 0.2),
        color: colors.black,
        marginRight: '3%'
    }

});

export default RestaurantInfoViewV2;