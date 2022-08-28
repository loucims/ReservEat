import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
//import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
//----------------------------------------------------------------------------------------------------------------------\\
import MainView from '../components/MainView';
import { colors } from '../utils/colors';
import { scale, moderateScale, verticalScale} from '../utils/scaling';
import { RFValue } from 'react-native-responsive-fontsize';

const LogInView = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({errorEmail: '', errorPassword: '', error: ''});    

    const verifyCredentials = () =>{
        if (username === '' || password === ''){
            setErrors({errorEmail: '', errorPassword: '', error: 'Por favor, ingrese su email y contraseña'});
            return
        } 
        console.log(username)
        console.log(password)

        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.success){
                navigation.navigate('Home');
                setErrors({errorEmail: '', errorPassword: '', error: ''});
            } else {
                setErrors({errorEmail: '', errorPassword: '', error: 'La contraseña o el email son incorrectos'});
            }
        }).catch((error) => {
            console.error(error);
        }).done();
    }
    
    return (
        <MainView statusColor={'dark-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.container}>

                <Text style={styles.title}>ReservEat</Text>

                <View style={styles.backdrop}>

                    <View style={styles.inputField}>
                        <TextInput onChangeText={(input) =>{setUsername(input)}} 
                            style={styles.input} 
                            fontSize={username ? RFValue(16) : RFValue(17)} 
                            selectionColor={colors.black}
                            placeholder="Email" 
                            placeholderTextColor={colors.black}/>
                        <View style={styles.line}/>

                        {errors.errorEmail ? 
                        <View style={styles.errorContainerField}>
                            <Text style={styles.error}>{errors.errorEmail}</Text>
                        </View> 
                        : null}

                    </View>


                    
                    <View style={styles.inputField} marginBottom={'25%'} marginTop={'25%'}>
                        <TextInput secureTextEntry={true} 
                            onChangeText={(input) =>{setPassword(input)}} 
                            style={styles.input} 
                            fontSize={password ? RFValue(17) : RFValue(17)} 
                            selectionColor={colors.black}
                            placeholder="Password" 
                            placeholderTextColor={colors.black}/>
                        <View style={styles.line}/>

                        {errors.errorPassword ? 
                        <View style={styles.errorContainerField}>
                            <Text style={styles.error}>{errors.errorPassword}</Text>
                        </View> 
                        : null}

                    </View>

    
                    <TouchableOpacity style={styles.button} onPress={() =>{
                        //navigation.navigate("Home")
                        verifyCredentials();
                    }}> 
                        <Text style={styles.buttonText}>Confirmar</Text>

                        {errors.error ? 
                        <View style={styles.errorContainerButton}>
                            <Text numberOfLines={1} style={styles.error}>{errors.error}</Text>
                        </View> 
                        : null}
                        
                    </TouchableOpacity>


                    <View style={{flexDirection: 'column', marginBottom: '15%', marginTop: '10%', alignItems: 'center'}}>
                        <Text style={styles.text}>No tienes una cuenta?&nbsp;</Text>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate("Register")
                        }}> 
                            <Text style={styles.registerText}>Registrate</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </MainView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.red,
        alignItems: 'center'
    },
    title: {
        fontSize: RFValue(40),
        fontFamily: 'Aveni-Heavy',
        color: colors.white,
        paddingTop: '15%',
        paddingBottom: '10%',
        textAlign: 'center'
    },
    backdrop: {
        flex: moderateScale(0.95, -0.3),
        marginTop: moderateScale(2, 2),
        width: '90%',
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.red,
        borderRadius: 50,
        width: '40%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: RFValue(20),
        color: colors.white
    },
    text: {
        fontFamily: 'Aveni-Medium',
        fontSize: RFValue(17),
        color: colors.black
    },
    registerText: {
        fontFamily: 'Aveni-Medium',
        fontSize: RFValue(17),
        textDecorationLine: 'underline',
        color: colors.black
    },
    internalContainer: {
        flex: 0,
        width: '100%',
        height: '100%'
    },
    inputField: {
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',
        height: '7%',
    },
    input: {
        marginLeft: '10%',
        width: '80%',
        color: colors.black,
        fontFamily: 'Aveni-Medium',
        paddingBottom: '2%',
        marginBottom: '1%',
    },
    line: {
        backgroundColor: colors.black,
        width: '85%',
        marginHorizontal: '5%',
        height: '5%',
        alignSelf: 'center'
    },
    errorContainerField: {
        position: 'absolute',
        bottom: '-70%',
        left: '7%',
    },
    errorContainerButton: {
        position: 'absolute',
        bottom: '-60%',
        width: '200%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        color: 'red',
        fontSize: RFValue(12),
        fontFamily: 'Aveni-Medium',
    },
});

export default LogInView;