import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//----------------------------------------------------------\\
import RawMap from './BareMap';
import { menuItems } from '../utils/menuItems';
import { colors } from '../utils/colors';
import { scale, verticalScale, moderateScale } from '../utils/scaling';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RestaurantInfoViewV2 = ({restaurant, navigation}) => {


    return(
        <ScrollView style={styles.container}>
            
            <ImageBackground style={styles.headerContainer} source={require("../../assets/testbuti.jpg")}>
                <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)']} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>

                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity style={{width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 99, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() =>{navigation.goBack();}}>
                            <Image source={require("../../assets/icons/x-icon.png")} style={{width: scale(15), height: scale(15)}}/>
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
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Menu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Ubicacion
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(15, 0.2)}}>
                        Ratings
                    </Text>
                </TouchableOpacity>
            </View>


            {menuItems.items.map(item => (
                <View key={item.name} style={styles.menuItemContainer}>
                    <View style={[styles.header, {flexDirection: 'row'}]}>
                        <View style={[styles.iconContainer , {borderColor: colors.red}]}>
                            <Image source={require("../../assets/testbuti.jpg")} style={styles.restaurantIcon}/>
                        </View>
                        <View style={[styles.titleLine , {backgroundColor: colors.red, width: '70%', marginTop: 'auto'}]}/>
                    </View>
                </View>
            ))}

            <View style={{height: 10}}/>

        </ScrollView>
    );
}
/* 
            {menuItems.items.map(item => (
                <View key={item.name} style={styles.menuItemContainer}>

                </View>
            ))}

                        <View style={styles.itemInfoContainer}>
                            <View style={[styles.infoContainer, {backgroundColor: colors.black}]}>
                                <Text style={{fontFamily: 'Aveni-Heavy',fontSize: moderateScale(17, 0.2), paddingBottom: '1.5%'}}>
                                    {item.name}
                                </Text>

                                <Text style={{fontFamily: 'Aveni-Medium',fontSize: moderateScale(15, 0.2)}}>
                                    {item.descripcion}
                                </Text>

                                <Text style={{fontFamily: 'Aveni-Medium',fontSize: moderateScale(15, 0.2), alignSelf: 'flex-end', marginTop: 'auto'}}>
                                    100$
                                </Text>
                            </View>

                        </View>
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
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
        alignSelf: 'flex-end',
        marginBottom: 'auto',
        marginTop: '2%',
        marginRight: '1%'
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
        justifyContent: 'center'
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

    }

});

export default RestaurantInfoViewV2;