import React, { useEffect, useState } from 'react';

import {
  Alert,
  Button,
  FlatList,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Geocoder from 'react-native-geocoding';

const FetchCity = (props) =>{

  const [home,setHome] = useState(
    [
      {
        id: 1,
        image_url: require('../src/images/a.jpeg'),
        name: "Bhubaneswar",
      },
      {
        id: 2,
        image_url: require('../src/images/b.jpeg'),
        name: "Kolkata",
      },
      {
        id: 3,
        image_url: require('../src/images/c.jpeg'),
        name: "Chennai",
      },
      {
        id: 4,
        image_url: require('../src/images/d.jpeg'),
        name: "Bangalore",
      },
      {
        id: 5,
        image_url: require('../src/images/e.jpeg'),
        name: "Mumbai",
      },
      {
        id: 6,
        image_url: require('../src/images/f.jpeg'),
        name: "Delhi",
      },
    ]
  )

  useEffect( ()=>{
    
  })

  renderPackage = ({ item }) => {
    return (
      
<View style={{alignItems: 'center'}}>
              <Image
                source={item.image_url}
                style={[styles.itemImage, { alignSelf: "center" }]}
              ></Image>
            <Text>{item.name}</Text>
            </View>
    )
  }


  return (
    <View style={styles.container}>
      <Image source={require('../src/images/search.png')} style={{width: 20,height: 20,left: 50,top: 56,tintColor: '#EA4B43',zIndex: 1,alignSelf: 'flex-start'}}/>
      <TextInput placeholder='Search for city'
      style={{borderWidth: 2,borderColor: '#F0F0F0',marginTop: 20,width: '80%',paddingLeft: 40,borderRadius: 10,backgroundColor: '#fff'}}/>
      <Text style={{
        fontWeight: '600',
        marginTop: 30,
        color: '#000',
        fontSize: 16,
        alignSelf: 'flex-start',
        left: 50
      }}>Popular Cities</Text>
      <View style={{ flex: 1, marginHorizontal: "5%", marginTop: 40 }}>
            <FlatList
              numColumns={3}
              data={home}
              keyExtractor={(item, index) => item.name}
              renderItem={(item)=>renderPackage(item)}
            ></FlatList>
          </View>
    </View>
  )
}

export default FetchCity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F9FAFC',
    width: '100%'
  },
  itemImage: {
    height: 110,
    width: 85,
    margin: 15,
    borderRadius: 10
  },
})