import React, { useEffect, useState } from 'react';

import {
  Alert,
  Button,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Map = ({navigation}) =>{

  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('');

  useEffect(()=>{
     Geolocation.getCurrentPosition(
      position => {
        setCurrentLatitude(position.coords.latitude)
        setCurrentLongitude(position.coords.longitude)
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        // maximumAge: 2000
      }
    );
  })


  return (
    <View style={styles.container}>
      <MapView
    initialRegion={{
      latitude: Number(currentLatitude),
      longitude: Number(currentLongitude),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    style={styles.mapStyle}
  >
    
    <Marker
            coordinate={{
              latitude: Number(currentLatitude),
              longitude: Number(currentLongitude),
            }}
           draggable
           onDragEnd={(data)=>{
             setCurrentLatitude(data.nativeEvent.coordinate.latitude)
             setCurrentLongitude(data.nativeEvent.coordinate.longitude)

           }}
          />
          
    </MapView>
    <View
        style={{
          flex: 1,
            alignItems:  'center',
            justifyContent: 'flex-start',
            top: 20,
        }}
    >
      <GooglePlacesAutocomplete
      minLength={2}
      placeholder='Search'
      fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: 'address'
				}}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBX6XRp6rjIm1iG3lUv_-mrmsTBinPHBpw',
        language: 'en',
        type: ['(cities)','address']
      }}
      styles={{
        container: { position: "absolute", width: "80%", zIndex: 1 },
        listView: { backgroundColor: "white" }
      }}
      onFail={error => console.error(error)}

    />
    </View>
    <View
        style={{
            alignSelf: 'center',
            bottom: 50,
            width: '80%',
        }}
    >
        <TouchableOpacity onPress={()=> console.log(currentLatitude,currentLongitude)}
        style={{backgroundColor: '#EA4B43',height: 40,justifyContent: 'center',borderRadius: 10}}
        >
          <Text style={{color: '#fff',textAlign: 'center'}}>Confirm Location</Text>
</TouchableOpacity>
    </View>
    </View>
  )
}

export default Map;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
