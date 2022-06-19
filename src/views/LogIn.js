import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { colors } from '../utils/colors';
import { useFonts } from 'expo-font';

const LogInView = () =>{
    const [loaded] = useFonts({
        'Aveni-Heavy': require('../../assets/fonts/Avenir/Metropolis-SemiBold.otf'),
        'Aveni-Medium': require('../../assets/fonts/Avenir/Metropolis-Medium.otf'),
    })
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (!loaded){
        return null
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>ReservEat</Text>
                <View style={styles.backdrop}>
                    <TextInput onChangeText={(input) =>{setUsername(input)}} style={styles.input} fontSize={username ? 17 : 20} marginBottom={-5} placeholder="Email" placeholderTextColor={colors.white}/>
                    <View style={styles.line} marginBottom={120}/>
                    <TextInput secureTextEntry={true} onChangeText={(input) =>{setPassword(input)}} style={styles.input} fontSize={password ? 19 : 20} marginBottom={-5} placeholder="Password" placeholderTextColor={colors.white}/>
                    <View style={styles.line} marginBottom={120}/>
    
    
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <View flexDirection={'row'}>
                        <Text style={styles.text}>No tienes una cuenta?&nbsp;</Text>
                        <TouchableOpacity> 
                            <Text style={styles.registerText}>Registrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>

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
        paddingTop: 100,
        paddingBottom: 40,
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
    input: {
        width: 300,
        height: 55,
        paddingLeft: 20,
        color: colors.white,
        fontFamily: 'Aveni-Medium'
    },
    line: {
        backgroundColor: colors.white,
        width: 270,
        height: 1
    }
});

export default LogInView;