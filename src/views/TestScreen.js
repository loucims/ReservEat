import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import MainView from '../components/MainView';
import Map from '../components/Map';
import { foodCategories } from '../utils/categories';
import { colors } from '../utils/colors';

const TestScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    return (
        <MainView statusColor={'light-content'} safeAreaTopColor={colors.dim_red} safeAreaBottomColor={colors.dim_red}>
            <View style={styles.container}>
                <Text style={styles.title}>ReservEat</Text>
                <View style={styles.backdrop}>
                    
                </View>
            </View>
        </MainView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontFamily: 'Aveni-Heavy',
        color: colors.black,
        paddingTop: '15%',
        paddingBottom: '10%',
        textAlign: 'center'
    },
    backdrop: {
        flex: 0.95,
        width: '90%',
        paddingBottom: '50%',
        backgroundColor: colors.black,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 25 
    },
    text: {
        fontFamily: 'Aveni-Medium',
        fontSize: 17,
        color: colors.white,
        paddingBottom: 30,
    },
    registerText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 17,
        textDecorationLine: 'underline',
        color: colors.white,
        paddingBottom: 30
    },
    internalContainer: {
        flex: 0,
        width: '100%',
        height: '100%'
    },
    inputField: {
        alignSelf: 'stretch',

    },
    input: {
        width: 300,
        height: 55,
        paddingLeft: 20,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
    },
    line: {
        backgroundColor: colors.white,
        alignSelf: 'stretch',
        height: 1
    }
});

export default TestScreen;