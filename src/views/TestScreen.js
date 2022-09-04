import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity, Button, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//----------------------------------------------------------\\
import MainView from '../components/MainView';
import Map from '../components/Map';
import { foodCategories } from '../utils/categories';
import { colors } from '../utils/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import RNDateTimePicker from '@react-native-community/datetimepicker';
const TestScreen = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View style={{flex:1}}>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <RNDateTimePicker            t
        estID="dateTimePicker"
            value={date}
            mode={'datetime'}
            minimumDate={new Date()}
            is24Hour={true}
            onChange={onChange}/>
        <RNDateTimePicker            t
        estID="dateTimePicker"
            value={date}
            mode={'time'}
            minimumDate={new Date()}
            is24Hour={true}
            onChange={onChange}/>
      </View>
    );
  };

export default TestScreen;