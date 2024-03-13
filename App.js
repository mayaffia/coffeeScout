import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from "./screens/Registration";
import Auth from "./screens/Auth";
import Profile from "./screens/Profile";
import Main from "./screens/Main";
import {useFonts} from "expo-font";
import Icon from 'react-native-ico-material-design';
import Cart from "./screens/Cart";
import MapScreen from "./screens/MapScreen";


const Stack = createStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    MontserratAlternates: require('./assets/fonts/MontserratAlternates-Regular.ttf'),
    MontserratAlternatesSemiBold : require('./assets/fonts/MontserratAlternates-SemiBold.ttf'),
    MontserratAlternatesMedium : require('./assets/fonts/MontserratAlternates-Medium.ttf'),
  });


  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="registration"
              component={Registration}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="auth"
              component={Auth}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="profile"
              component={Profile}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="main"
              component={Main}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="cart"
              component={Cart}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="map"
              component={MapScreen}
              options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//export default App;
