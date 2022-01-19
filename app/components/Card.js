import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card({style}) {
  return (
   <View style={[styles.container, style]}>
   
   </View>
  );
}





const styles = StyleSheet.create({
    container:{
        height:"50%",
        width:"60%",
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:10,
        borderColor:"black"
    }
})

export default Card;