import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
//import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import MainView from '../components/MainView';
import { colors } from '../utils/colors';
import { scale, moderateScale, verticalScale} from '../utils/scaling';

const LogInView = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    return (
        <MainView statusColor={'light-content'} safeAreaTopColor={colors.red} safeAreaBottomColor={colors.red}>
            <View style={styles.container}>
                <Text style={styles.title}>ReservEat</Text>
                <View style={styles.backdrop}>
                    <View style={styles.inputField}>
                        <TextInput onChangeText={(input) =>{setUsername(input)}} style={styles.input} fontSize={username ? moderateScale(17, 1.5) : moderateScale(20, 1.5)} marginBottom={-5} placeholder="Email" placeholderTextColor={colors.white}/>
                        <View style={styles.line}/>
                    </View>
                    <View style={styles.inputField} marginBottom={'25%'} marginTop={'25%'}>
                        <TextInput secureTextEntry={true} onChangeText={(input) =>{setPassword(input)}} style={styles.input} fontSize={password ? moderateScale(23, 2) : moderateScale(20, 1.5)} marginBottom={-5} placeholder="Password" placeholderTextColor={colors.white}/>
                        <View style={styles.line}/>
                    </View>
    
                    <TouchableOpacity style={styles.button} onPress={() =>{
                        navigation.navigate("Home")
                    }}> 
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <View flexDirection={'row'} paddingBottom={'15%'} paddingTop={'10%'}>
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
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        fontSize: moderateScale(40, 1.3),
        fontFamily: 'Aveni-Heavy',
        color: colors.black,
        paddingTop: '15%',
        paddingBottom: '10%',
        textAlign: 'center'
    },
    backdrop: {
        flex: moderateScale(0.95, -0.3),
        marginTop: moderateScale(2, 2),
        width: '90%',
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
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Aveni-Medium',
        fontSize: moderateScale(25) 
    },
    text: {
        fontFamily: 'Aveni-Medium',
        fontSize: moderateScale(17, 1.2),
        color: colors.white
    },
    registerText: {
        fontFamily: 'Aveni-Medium',
        fontSize: moderateScale(17,1.2),
        textDecorationLine: 'underline',
        color: colors.white
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
        marginLeft: '8%',
        color: colors.white,
        fontFamily: 'Aveni-Medium',
        paddingBottom: '4%'
    },
    line: {
        backgroundColor: colors.white,
        width: '90%',
        marginHorizontal: '5%',
        height: '5%'
    }
});

export default LogInView;