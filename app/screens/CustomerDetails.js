import React from 'react';
import { View, StyleSheet,Text,FlatList,SafeAreaView, Button, TouchableOpacity,ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';

const DATA = [
  {
    id: '1',
    title: 'priyaknkhkh',
    phone:'9889990029',
    email:'amlkjxa'
  },
  {
    id: '2',
    title: 'madhu',
    phone:'9839379867',
    email:'swjjw'
  },
  {
    id: '3',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '4',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '5',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '6',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '7',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '8',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '9',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '10',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
  {
    id: '11',
    title: 'sandhiya',
    phone:'8938378729',
    email:'wjnkjx'
  },
];



function CustomerDetails({navigation}) {
  const Item = ({ title, id, phone }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Weight Details')}>
    <View >
    <Text style={styles.titles}>{id}</Text>
    </View>
      <View style={{width:"30%",alignItems:'center'}}>
      <Text style={styles.titles}>{title}</Text>
      </View>
      <View style={{width:"27%",alignItems:'center'}}>
      <Text style={styles.titles}>{phone}</Text>
      </View>
      
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} phone={item.phone} email={item.email} />
  );

  return (
    <ImageBackground source={require('../../assets/img.jpg')} style={styles.container}>
    
    <View style={styles.items}>
    <View >
    <Text style={{color:'black',fontSize:25}}>ID</Text>
    </View>
      <View style={{width:"30%",alignItems:'center'}}>
      <Text style={{color:'black',fontSize:25}}>Name</Text>
      </View>
      <View style={{width:"25%",alignItems:'center'}}>
      <Text style={{color:'black',fontSize:25}}>Phone</Text>
      </View>
      
    </View>
    
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{height:"20%",width:"100%",alignItems:'center',justifyContent:"center"}}>
      <AppButton title='ADD' onPress={() => navigation.navigate('Create User')}></AppButton>
    
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: Platform.OS==='android' ? 25 : 0,
    
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
  items: {
    
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    color:'green'
  },
  titles: {
    fontSize: 15,
    color:'green'
  },
});

export default CustomerDetails;