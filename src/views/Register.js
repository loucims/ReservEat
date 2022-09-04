import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../utils/colors';
import MainView from '../components/MainView';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const RegisterView = ({navigation}) =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    const [error, setError] = useState('');  

    const mediumText = RFValue(17);
    const smallText = RFValue(16);

    const validateRegister = () =>{
        if (username === '' || email === '' || password === '' || passConfirm === ''){
            setError('Por favor, ingrese todos los campos');
            return
        }
        if (password !== passConfirm){
            setError('Las contraseñas no coinciden');
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch('https://reserv-eat-backend.vercel.app/clientes', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                nombre: username,
                email: email,
                password: password
            })
        }).then((response) => {
            if (response.status === 200){
                setError('');
                navigation.navigate('Home')
            } else if (response.status === 409) {
                setError('El email ya está registrado');
            }
        }).catch(error => {
            console.log('error creating account',error)
            setError('Algo salió mal, intente nuevamente');
        }).done();

    }



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
                        validateRegister()
                    }}> 
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>

                    {error ? 
                        <View style={styles.errorContainerButton}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.error}>{error}</Text>
                        </View> 
                    : null}

                    <View style={styles.logOnTextContainer}>
                        <Text style={styles.text}>Ya estas registrado?&nbsp;</Text>
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate("LogIn")
                        }}> 
                            <Text style={styles.registerText}>Inicia sesion</Text>
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
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 4,  
        elevation: 5,
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
    errorContainerField: {
        position: 'absolute',
        bottom: '-70%',
        left: '7%',
    },
    errorContainerButton: {
        position: 'absolute',
        backgroundColor: colors.dim_red,
        borderRadius: 5,
        width: '100%',
        paddingVertical: '2%',
        bottom: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,  
        elevation: 5,
    },
    error: {
        color: colors.white,
        fontSize: RFValue(12),
        fontFamily: 'Aveni-Medium',
    },
});

export default RegisterView;