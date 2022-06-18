import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, cloneElement } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import { colors } from '../utils/colors';

const LogInView = () =>{


    return (
      <View style={styles.container}>
        <Text style={styles.title}>ReservEat</Text>
        <View style={styles.backdrop}>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor={colors.white}/>
            <View style={{
                borderBottomColor: colors.white,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}/>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor={colors.white}/>


            <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>No tienes una cuenta?&nbsp;
                <Text style={styles.registerText}>Registrate</Text>
            </Text>
        </View>
        <StatusBar style="auto" />
      </View>
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
        fontFamily: 'Avenir-Heavy',
        color: colors.black,
        paddingTop: 100,
        paddingBottom: 30,
        textAlign: 'center'
    },
    backdrop: {
        backgroundColor: colors.black,
        width: 350,
        height: 590,
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
        fontFamily: 'Avenir-Medium',
        fontSize: 25 
    },
    text: {
        fontFamily: 'Avenir-Medium',
        fontSize: 17,
        color: colors.white,
        paddingBottom: 30,
    },
    registerText: {
        fontFamily: 'Avenir-Medium',
        fontSize: 17,
        textDecorationLine: 'underline',
        color: colors.white,
        paddingBottom: 30,
        marginLeft: 200
    },
    input: {
        width: 300,
        height: 55,
        paddingLeft: 20,
        paddingBottom: 150,
        color: colors.white,
        fontFamily: 'Avenir-Medium',
        fontSize: 20
    }
});

export default LogInView;