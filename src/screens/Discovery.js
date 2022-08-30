import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import Map from '../components/Map';
import { colors } from '../utils/colors';
import { foodCategories } from '../utils/categories';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DiscoveryView = ({navigation}) => {

    const [searchField, setSearchField] = useState('');

    return (
        <>
        <View style={styles.discoveryBarView}>
            <View style={styles.discoveryBar}>
                <Image source={require("../../assets/icons/discoveryBar/search.png")} style={styles.searchIcon} marginHorizontal={'5%'} marginTop={'3%'}/>
                <View style={{height: '100%'}}>
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
        </>
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
        flexDirection:'row',
        marginTop: RFPercentage(0.1),
        height: '55%'
    },
    scrollDiscoveryBar: {
        width: '100%',
        height: '10%'  
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
    input: {
        width: '90%',
        height: '100%',
        marginBottom: -10,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
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

    
  });

export default DiscoveryView;