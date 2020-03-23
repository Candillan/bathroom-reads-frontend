import React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const Login = () => {
    console.log("hitting login")
  return (
    <View>
      <Text>Login Form</Text>
      <View>
        <TextInput 
          placeholder="Email" 
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button title="Log In"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
});

export default Login;