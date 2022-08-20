import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import Map from '../components/Map';
import { foodCategories } from '../utils/categories';
import { colors } from '../utils/colors';
import MainView from '../components/MainView'

const HomeView = ({navigation}) => {
    const [searchField, setSearchField] = useState('');


    return(
        <MainView statusColor={'light-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.discoveryBarView}>
                <View style={styles.discoveryBar}>
                    <Image source={require("../../assets/icons/discoveryBar/search.png")} style={styles.searchIcon} marginHorizontal={20} marginTop={15}/>
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
            <Map navigation={navigation}/> 
            <View style={styles.statusBarView}>
                <View style={styles.statusBar}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/icons/statusBar/map-pressed.png")} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require("../../assets/icons/statusBar/reserves.png")} style={styles.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require("../../assets/icons/statusBar/user.png")} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: colors.black
    },
    discoveryBar: {
        flexDirection:'row',
        marginTop: 10
    },
    scrollDiscoveryBar: {
        width: '100%',
        height: '13%'  
    },
    categoryButton: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 100,
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
        backgroundColor: colors.black,
        width: '100%',
        height: '10%'
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