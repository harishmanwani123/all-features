import { View, Text, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');

  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [mobileerror, setMobileerror] = useState("")
  const [passworderror, setPassworderror] = useState("")

  const handleTextinput = () => {
    setMobileerror("")
    setPassworderror("")
  }

  const handleLogin = async () => {
    if (mobile === "") {
      setMobileerror("Please enter mobile number")
    } else if (password === "") {
      setPassworderror("please enter password")
    } else if (password.length < 6) {
      setPassworderror("password should be 6 charctor")
    } else {
      setMobileerror("")
      setPassworderror("")
      // navigation.navigate("Home")
    }

    console.log('Mobile number:', mobile);
    console.log('Password:', password);

    try {
      const response = await fetch('https://clients.charumindworks.com/satya/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          mobile: mobile,
          password: password
        })
      });
      const data = await response.json()
      console.log(data)

      if (response.ok) {
        navigation.navigate('Home')
      } else {
        Alert.alert('Invalid mobile or password', data.message)
      }

    } catch (error) {
      console.log('error', error)
    }
    // try {
    //   const response = await fetch('https://clients.charumindworks.com/satya/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       mobile: mobile,
    //       password: password
    //     })
    //   });
    //   const data = await response.json()
    //   console.log(data, 'ttovvk=KFKF')


    //   if (response.ok) {
    //     const userEmail = data.user.email;
    //     console.log("User email:", userEmail);
    //     const userId = data.user.id
    //     console.log('user ID', userId)
    //     const access_Token = data.user.designations[1].pivot.designation_id
    //     console.log('Access Token', access_Token)

    //     // Continue with your navigation or other logic
    //     navigation.navigate('Home');
    //   } else {
    //     Alert.alert('Login Failed', data.message);
    //   }
    // } catch (error) {
    //   // An error occurred during the API request, handle it
    //   console.error('Error during login:', error);
    //   Alert.alert('Error', 'An error occurred during login. Please try again later.');
    // }
  }
  return (
    <LinearGradient
      style={{ flex: 1 }} colors={['rgb(63,94,251)', 'rgb(98,252,70)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 140 }}>
        <Text style={{ color: 'white', fontSize: 25 }}>Dr.Satya</Text>
        <Image
          style={{ marginTop: 10 }}
          source={require('../Assets/images/Logo_Satya.png')} />
      </View>
      <View style={{ width: 280, height: 50, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 40, marginTop: 15 }}>
        <TextInput
          style={{ marginHorizontal: 10 }}
          placeholder='Enter Mobile Number'
          placeholderTextColor="black"
          numberOfLines={1}
          keyboardType='number-pad'
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          onBlur={handleTextinput} />
      </View>
      {mobileerror ? <Text style={{ color: 'red', fontSize: 15, marginHorizontal: 45 }}>{mobileerror}</Text> : null}
      <View style={{ width: 280, height: 50, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 40, marginTop: 15 }}>
        <TextInput
          style={{ marginHorizontal: 10 }}
          placeholder='Enter Password'
          placeholderTextColor="black"
          numberOfLines={1}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onBlur={handleTextinput} />
      </View>
      {passworderror ? <Text style={{ color: 'red', fontSize: 15, marginHorizontal: 45 }}>{passworderror}</Text> : null}
      <TouchableOpacity
        onPress={handleLogin}
        style={{ width: 180, height: 40, backgroundColor: 'white', alignItems: 'center', borderRadius: 20, justifyContent: 'center', marginHorizontal: 90, marginTop: 60 }}>
        <Text style={{ color: 'black' }}>Log In </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default LoginScreen