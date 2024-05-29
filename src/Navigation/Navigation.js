import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../Screen/SplashScreen'
import LoginScreen from '../Screen/LoginScreen'
import Home from '../Screen/Home'
import LinkScreen from '../Screen/LinkScreen'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='LinkScreen' component={LinkScreen} options={{headerShown:false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation