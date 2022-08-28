import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { colors } from '../utils/colors';
import { useFonts } from 'expo-font';
import MainView from '../components/MainView';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const RegisterView = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    const mediumText = RFValue(17);
    const smallText = RFValue(16);


    return (
        <MainView statusColor={'dark-content'} safeAreaTopColor={colors.white} safeAreaBottomColor={colors.white}>
            <View style={styles.container}>
                <View style={styles.titleRow} flexDirection={'row'} alignItems={'center'}>   
                    <View style={styles.lineTitle} backgroundColor={colors.black}/>
                    <Text style={styles.title}>Registrarse</Text>
                    <View style={styles.lineTitle} backgroundColor={colors.black}/>
                </View>
                <View style={styles.backdrop}>
                    <TextInput onChangeText={(input) =>{setUsername(input)}} 
                        adjustsFontSizeToFit={true} numberOfLines={1}
                        style={styles.input} 
                        fontSize={username ? smallText : mediumText} 
                        selectionColor={colors.black}
                        placeholder="Nombre" 
                        placeholderTextColor={colors.white}/>

                    <View style={styles.line} backgroundColor={colors.white} marginBottom={'6%'}/>

                    <TextInput onChangeText={(input) =>{setEmail(input)}} 
                        adjustsFontSizeToFit={true} numberOfLines={1}
                        style={styles.input} 
                        fontSize={email ? smallText : mediumText} 
                        selectionColor={colors.black}
                        placeholder="Email" 
                        placeholderTextColor={colors.white}/>

                    <View style={styles.line} backgroundColor={colors.white} marginBottom={'6%'}/>

                    <TextInput secureTextEntry={true} 
                        adjustsFontSizeToFit numberOfLines={1}
                        onChangeText={(input) =>{setPassword(input)}} 
                        style={styles.input} 
                        fontSize={password ? smallText : mediumText} 
                        selectionColor={colors.black}
                        placeholder="Contraseña" 
                        placeholderTextColor={colors.white}/>

                    <View style={styles.line} backgroundColor={colors.white} marginBottom={'6%'}/>
                    
                    <TextInput secureTextEntry={true} 
                        adjustsFontSizeToFit={true} numberOfLines={1}
                        onChangeText={(input) =>{setPassConfirm(input)}} 
                        style={styles.input} fontSize={passConfirm ? smallText : mediumText} 
                        selectionColor={colors.black}
                        placeholder="Confirmar contraseña" 
                        placeholderTextColor={colors.white}/>

                    <View style={styles.line} backgroundColor={colors.white} marginBottom={'30%'}/>

    
    
                    <TouchableOpacity style={styles.button} onPress={() =>{
                        navigation.navigate("Home")
                    }}> 
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <View style={styles.logOnTextContainer}>
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
        </MainView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    titleRow: {
        paddingTop: '15%',
        paddingBottom: '10%',
    },
    title: {
        fontSize: 35,
        fontFamily: 'Aveni-Heavy',
        color: colors.black,
        textAlign: 'center'
    },
    backdrop: {
        backgroundColor: colors.red,
        width: '85%',
        height: '72%',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: '50%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 25 
    },
    text: {
        fontFamily: 'Aveni-Medium',
        fontSize: 17,
        color: colors.white,
    },
    registerText: {
        fontFamily: 'Aveni-Medium',
        fontSize: 17,
        textDecorationLine: 'underline',
        color: colors.white
    },
    input: {
        width: '80%',
        height: '8%',
        paddingLeft: '5%',
        color: colors.white,
        fontFamily: 'Aveni-Medium',
        marginBottom: '-1%',
    },
    line: {
        width: '80%',
        height: 1
    },
    lineTitle: {
        width: '20%',
        height: 3
    },
    logOnTextContainer: {
        flexDirection: 'column',
        paddingBottom: '8%',
        alignItems: 'center'
    },
});

export default RegisterView;