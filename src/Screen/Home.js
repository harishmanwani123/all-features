import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const onPressHandler = () => { 
    navigation.navigate('LinkScreen', { uri: 'https://results.indiaresults.com/pb/pseb/sr-sec-exam-result-september-2023/query.htm' });


  };

  useEffect(() => {
    let str = 'levell';
    console.log(palindrome(str));
  }, []);

  function palindrome(data) {
    if (!data) return true; // Handle empty string case  
    let start = 0;
    let end = data.length - 1;
    let result = true;
    while (end > start) {
      if (data[start] !== data[end]) {
        result = false; // Correct assignment
        break; // No need to continue loop if mismatch found
      }
      start++;
      end--;
    }
    return result;
  }


  return (
    <View style={styles.container}>
      <Button title="https://results.indiaresults.com/pb/pseb/sr-sec-exam-result-september-2023/query.htm" onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;