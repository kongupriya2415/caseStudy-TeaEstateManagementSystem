import React from 'react';
import { View, StyleSheet,ImageBackground,Text,Image } from 'react-native';
import AppButton from '../components/AppButton'


function WelcomeScreen({navigation}) {
  return (
    <ImageBackground style={styles.container} source= {require('../../assets/image.jpg')} >
    <Text style={{color:'#8D4B3D',marginTop:160,fontSize:35}}>WELCOME</Text>

    

    <View style={{height:'30%',width:'100%',alignItems:'center',marginTop:150,justifyContent:'flex-end'}}>
    <AppButton title='Login' onPress={() => navigation.navigate('UserType')}></AppButton>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      
      
      alignItems:'center',
     
    //   justifyContent:'space-between'
    },
  });
  

export default WelcomeScreen;