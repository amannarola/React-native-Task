import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './src/Map'
import City from './src/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () =>{

  useEffect(()=>{
    
  })


  return (
    <NavigationContainer>
<Tab.Navigator screenOptions={{
  tabBarIndicatorContainerStyle: {alignItems: 'center'},
tabBarIndicatorStyle:{width: 100,backgroundColor: '#EA4B43',left: 50}

}}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="City" component={City} />
    </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App;
