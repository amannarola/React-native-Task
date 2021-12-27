import React, { useEffect, useState } from 'react';
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


const home = (props) =>{


    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        console.log('Authorization status(authStatus):', authStatus);
        return (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
      };

    useEffect(()=>{

        PushNotification.getChannels(function (channel_ids) {
            console.log(channel_ids); // ['channel_id_1']
          });
        PushNotification.configure({
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
          
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
              if(notification.data.type === 'simple'){
                props.navigation.navigate('home')
              }else if(notification.data.type === 'alert'){
                  props.navigation.navigate('about')
              }else if(notification.data.type === 'image'){
                props.navigation.navigate('setting')
              }
              
          
              // process the notification
              notification.finish(
                
              );
            },
          
            onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
      
            },
          
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
          
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
          });
          if (requestUserPermission()) {
            messaging()
              .getToken()
              .then((fcmToken) => {
                console.log('FCM Token -> ', fcmToken);
              });
          } else console.log('Not Authorization status:', authStatus);
          const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            
              console.log(remoteMessage);
            PushNotification.localNotification({
                channelId: "fcm_fallback_notification_channel",
                data: remoteMessage.data,
              message: remoteMessage.notification.body,
              title: remoteMessage.notification.title,
              bigPictureUrl: remoteMessage.notification.android.imageUrl,
              smallIcon: remoteMessage.notification.android.imageUrl,
            });
          });
          return unsubscribe;
    })

  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{color: '#000',fontSize: 16}}>Simple Notification</Text>
        </View>
  )
}

export default home;
