import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { colors } from '../utils/colors';
import { useFonts } from 'expo-font';

const RegisterView = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.titleRow} flexDirection={'row'}>   
                    <View style={styles.lineTitle} backgroundColor={colors.black} marginTop={16}/>
                    <Text style={styles.title}>Registrarse</Text>
                    <View style={styles.lineTitle} backgroundColor={colors.black} marginTop={16}/>
                </View>
                <View style={styles.backdrop}>
                    <TextInput onChangeText={(input) =>{setUsername(input)}} style={styles.input} fontSize={username ? 19 : 20} marginBottom={-5} placeholder="Nombre" placeholderTextColor={colors.white}/>
                    <View style={styles.line} backgroundColor={colors.white} marginBottom={20}/>
                    <TextInput onChangeText={(input) =>{setEmail(input)}} style={styles.input} fontSize={email ? 17 : 20} marginBottom={-5} placeholder="Email" placeholderTextColor={colors.white}/>
                    <View style={styles.line} backgroundColor={colors.white} marginBottom={20}/>
                    <TextInput secureTextEntry={true} onChangeText={(input) =>{setPassword(input)}} style={styles.input} fontSize={password ? 19 : 20} marginBottom={-5} placeholder="Contraseña" placeholderTextColor={colors.white}/>
                    <View style={styles.line} backgroundColor={colors.white} marginBottom={20}/>
                    <TextInput secureTextEntry={true} onChangeText={(input) =>{setPassConfirm(input)}} style={styles.input} fontSize={passConfirm ? 19 : 20} marginBottom={-5} placeholder="Confirmar contraseña" placeholderTextColor={colors.white}/>
                    <View style={styles.line} backgroundColor={colors.white} marginBottom={95}/>

    
    
                    <TouchableOpacity style={styles.button} onPress={() =>{
                        navigation.navigate("Home")
                    }}> 
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <View flexDirection={'row'}>
                        <Text style={styles.text}>Ya estas registrado?&nbsp;</Text>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate("LogIn")
                        }}> 
                            <Text style={styles.registerText}>Inicia sesion</Text>
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
    titleRow: {
        paddingTop: 100,
        paddingBottom: 40,
    },
    title: {
        fontSize: 35,
        fontFamily: 'Aveni-Heavy',
        color: colors.black,
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
        marginBottom: 35
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
        width: 270,
        height: 1
    },
    lineTitle: {
        width: 100,
        height: 3
    }
});

export default RegisterView;