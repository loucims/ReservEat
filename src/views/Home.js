import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
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

    const [searchField, setSearchField] = useState('');

    const RenderCurrentView = () => {
        switch(currentScreen){
            case 'User':
                break
            case 'Discovery':
                break
            case 'Reservations':
                break   
        }
    }


    return(
        <MainView statusColor={'light-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red} direction={'column-reverse'}>

            <View style={styles.statusBarView}>
                <View style={styles.statusBar}>
                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('User');
                    }}>
                        <Image source={currentScreen == 'User' ? userPressed : user} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Discovery');
                    }}>
                        <Image source={currentScreen == 'Discovery' ? mapPressed : map} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCurrentScreen('Reservations');
                    }}>
                        <Image source={currentScreen == 'Reservations' ? reservesPressed : reserves} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>


            <Map navigation={navigation}/> 


            <View style={styles.discoveryBarView}>
                <View style={styles.discoveryBar}>
                    <Image source={require("../../assets/icons/discoveryBar/search.png")} style={styles.searchIcon} marginHorizontal={'5%'} marginTop={'3%'}/>
                    <View>
                        <TextInput onChangeText={(input) =>{setSearchField(input)}} style={styles.input} 
                        fontSize={20} placeholder="Buscar.." placeholderTextColor={colors.white}/>
                        <View style={styles.line}/>
                    </View>
                </View>
                <ScrollView style={styles.scrollDiscoveryBar} horizontal={true} alignItems={'center'}>
                    {foodCategories.categories.map(category =>(
                        <TouchableOpacity key={category.name} style={styles.categoryButton}>
                            <Text style={styles.category}>{category.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>



            
        </MainView>
    );
};

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
        flexDirection:'row',
        marginTop: RFPercentage(0.1)
    },
    scrollDiscoveryBar: {
        width: '100%',
        height: '13%'  
    },
    categoryButton: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: '20%',
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        fontFamily: 'Aveni-Heavy',
        color: colors.black
    },
    statusBarView: {
        backgroundColor: colors.red,
        width: '100%',
        height: '10%'
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
    line: {
        backgroundColor: colors.white,
        width: 325,
        height: 1
    },
    input: {
        width: 300,
        height: 55,
        marginBottom: -10,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
    },
  });

export default HomeView;