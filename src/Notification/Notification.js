import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import home from './screens/home';
import about from './screens/about';
import setting from './screens/setting';

const Stack = createNativeStackNavigator();


const Notification = (props,navigation) =>{


  useEffect( ()=>{
     
  })


  return (
    <NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="about" component={about} />
      <Stack.Screen name="setting" component={setting} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})