import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,FlatList,TextInput} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UserType from './app/screens/UserType';
import CustomerDetails from './app/screens/CustomerDetails';
import React from "react";
import Login from './app/screens/Login';
import CustomerInput from './app/screens/CustomerInput';
import Register from './app/screens/Register';
import Profile from './app/screens/Profile';
import StackNavigation from './navigators/Stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
 
  

  return (
     //<WelcomeScreen />
     //<UserType />
     //<CustomerDetails />
    // <Login />
    <View style={styles.container}>
    <NavigationContainer>
    <StackNavigation />
    
    </NavigationContainer>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
  
});
