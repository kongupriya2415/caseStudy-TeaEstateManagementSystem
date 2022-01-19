import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomerDetails from '../app/screens/CustomerDetails';
import Register from '../app/screens/Register';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerInput from '../app/screens/CustomerInput';
import Login from '../app/screens/Login';
import UserType from '../app/screens/UserType';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      cardStyle: {
        backgroundColor: 'palegoldenrod',
      },
     
    }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="UserType" component={UserType} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Users" component={CustomerDetails} />
      <Stack.Screen name="Create User" component={Register} />
      <Stack.Screen name="Weight Details" component={CustomerInput} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default StackNavigation;