import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const Login = (props) => {
    console.log("hitting login")
  return (
    <View style={{ marginTop: 300,
      padding: 12,
      borderRadius: 8,
      color: "#a9d7db",
      backgroundColor: "#5eb6bd"}}>
      <Text style={{fontWeight: "bold", fontSize: 35}}>Bathroom Reader</Text>
      <View>
        <TextInput 
          placeholder="Email" 
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button onPress={() => props.logIn()}title="Log In"/>
        <Button title="Sign Up"/>
      </View>
    </View>
  );
};

export default Login;