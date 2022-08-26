import React from 'react';
import { TouchableWithoutFeedback, StatusBar, Keyboard, Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../utils/colors';
//----------------------------------------------------------\\

const MainView = ({statusColor, safeAreaTopColor, safeAreaBottomColor, children}) => {
    return (
        <View flex={1}>
            <SafeAreaProvider>
                <StatusBar barStyle={statusColor}/>
                <SafeAreaView edges={['top']} style={{flex: 0, backgroundColor: safeAreaTopColor}}/>
                <SafeAreaView edges={['bottom', 'left', 'right']} style={{flex:1, backgroundColor: safeAreaBottomColor, position: 'relative'}}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
};

export default MainView;