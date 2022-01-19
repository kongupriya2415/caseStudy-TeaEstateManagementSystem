import React from 'react';
import { View, StyleSheet ,Text, ImageBackground} from 'react-native';
import AppButton from '../components/AppButton';

function UserType({navigation}) {
  return (
    <ImageBackground  style={styles.container} source={require('../../assets/img.jpg')}>
 
    <Text style={{fontSize:30,marginBottom:40,fontWeight:'bold',color:'deeppink'}}>SignIn</Text>
 
    
    <View style={{height:"60%",width:"75%",backgroundColor:'whitesmoke',borderRadius:10, alignItems:'center',
    justifyContent:'center',marginTop:30}}>
    <AppButton title="Agent" onPress={() => navigation.navigate('Login')}/>
    <AppButton title="Customer"/>
    <AppButton title="ADMIN"/>
    </View>
 
  </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      paddingTop: Platform.OS==='android' ? 25 : 0,
      alignItems:'center',
      justifyContent:'flex-start'
     
    },
  });
  

export default UserType;