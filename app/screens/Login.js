import React,{useState} from 'react';
import { View, StyleSheet,ImageBackground,Text, TextInput,ScrollView } from 'react-native';
import AppButton from '../components/AppButton'


function Login({navigation}) {
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    
    <ImageBackground source={require('../../assets/img.jpg')} style={styles.container}>
    <View style={{justifyContent:'flex-start'}}>
    <Text style={{fontSize:30}}>Sign In</Text>
    </View>
 
    <View style={styles.card}>
    <View style={{flexDirection:'row',height:"20%",width:'90%',marginLeft:10}}>
    <Text style={{fontSize:20,color:'green',marginTop:15}}>Email:</Text>
    <TextInput
    style={styles.input}
    onChangeText={onChangeNumber}
    value={number}
    placeholder="Enter Email"
    
  />
    </View>
    <View style={{flexDirection:'row',height:'20%',width:'90%',marginVertical:10,marginLeft:10}}>
    <Text style={{fontSize:20,color:'green',marginTop:15}}>Password:</Text>
    <TextInput
    style={styles.input}
    onChangeText={onChangePassword}
    value={password}
    placeholder="Enter Password"
  
  />
    </View>
   
    </View>
    <View style={{height:"20%",width:"100%",justifyContent:"center",alignItems:'center'}}>
    <AppButton title='Login' onPress={() => navigation.navigate('Users')}></AppButton>
    </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  card:{
    height:"55%",
    width:"80%",
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:10,
    borderColor:"black",
    alignItems:'flex-start',
    justifyContent:'center',
    
      
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor:'black',
    borderRadius:5
  },

});

export default Login;