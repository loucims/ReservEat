//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import { StatusBar as StatusBarNative } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
//----------------------------------------------------\\
import { colors } from './src/utils/colors';
import SplashView from './src/views/Splash';
import LogInView from './src/views/LogIn';
import RegisterView from './src/views/Register';
import HomeView from './src/views/Home';
import RestaurantView from './src/views/Restaurant';


const Stack = createNativeStackNavigator()


const App = () => {
  const [loaded] = useFonts({
    'Aveni-Heavy': require('./assets/fonts/Avenir/Metropolis-SemiBold.otf'),
    'Aveni-Medium': require('./assets/fonts/Avenir/Metropolis-Medium.otf'),
  })
  if (!loaded){
      return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name={"Splash"} component={SplashView}/>
          
          <Stack.Screen name={"LogIn"} component={LogInView}/>
          
          <Stack.Screen name={"Register"} component={RegisterView}/>
          
          <Stack.Screen name={"Restaurant"} component={RestaurantView}/>
          
          <Stack.Screen name={"Home"} component={HomeView}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0
  }
});

export default App;
