import React from 'react';
import { View, StyleSheet, ScrollView, Text,TouchableOpacity, ImageBackground , Button} from 'react-native';

function CustomerInput({navigation}) {
  return (
    <ImageBackground source={require('../../assets/img.jpg')} style={styles.container}>
<View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
<Text>Enter weight</Text>
</View>


<View style={{height:"10%",width:"100%", marginLeft:10,marginTop:10}}>

<Text>Name:</Text>


<Text>Ph No:</Text>



</View>
<View style={{width:"40%",marginLeft:10}}>
<Button title="Add Weight" >
</Button>
</View>
<ScrollView>
<View style={{flexDirection:'row'}}>
<View style={{width:"30%",marginLeft:20,marginTop:10}}>
<Text>Date</Text>
</View>
<View style={{width:"25%",marginLeft:5}}>
<Text>Weight</Text>
</View>
<View style={{width:"20%",marginLeft:6}}>
<Text>Price</Text>
</View>

</View>
<TouchableOpacity style={styles.item}>
<View style={{flexDirection:'row'}}>
<View style={{width:"40%"}}>
<Text>01/02/21</Text>
</View>
<View style={{width:"20%",marginLeft:20}}>
<Text>100</Text>
</View>
<View style={{width:"20%",marginLeft:20}}>
<Text>1000</Text>
</View>

</View>
</TouchableOpacity>
</ScrollView>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:5
  },
});

export default CustomerInput;