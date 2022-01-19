//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';



function AppButton({title,onPress,style, }){
   return(
      <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress} >
      
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
  
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:"70%",
     marginVertical:10,
     
     backgroundColor:'#000000',
     
     height:50,
     borderRadius:10
     
     
    },
    text:{
       color:'white',
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
   
   
 
 
});
