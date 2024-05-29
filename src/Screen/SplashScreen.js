import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';                                

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen") 
    }, 3000);
  }, [])

  return (
    <LinearGradient
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} colors={['rgb(63,94,251)', 'rgb(98,252,70)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View>
        <Image source={require('../Assets/images/Logo_Satya.png')}/>
        <Text style={{ fontSize: 25, color: '#3f5efb', textAlign: 'center',}}>HealthCare{'\n'}Clinic</Text>
      </View>
    </LinearGradient>
  )
}

export default SplashScreen