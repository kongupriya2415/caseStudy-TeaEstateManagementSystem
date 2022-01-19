import React, {useContext} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import AuthContext from '../../auth/context';

const menus = [{
   
    title:"My listings",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:"gray"
    }},
    {
        title:"My message",
        icon:{
            name:"email",
            backgroundColor:"gray"
        },
    targetScreen:'Messages'
}
]

const Profile = ({navigation}) => {
    const  {user, setUser}= useContext(AuthContext);
    return (
        <View style={styles.contaicontextner}>
         <View style={styles.box}>
           <ListItem
            title="priya"
            subtitle="priya@gmail.com"
            image={require("../../assets/1.jpg")}
           ></ListItem>
         </View>


         <View style={styles.box}>
        
         <FlatList
           data={menus}
           keyExtractor={(menu)=> menu.title}
          
         
           renderItem={({item})=>(
               <ListItem
                title={item.title}
                // IconComponent={
                //     <Icons name={item.icon.name}
                //     backgroundColor={item.icon.backgroundColor} />
                // }
                ItemSeperatorComponent={ListItemSeperator}
                onPress={()=>navigation.navigate(item.targetScreen)}
               >

               </ListItem>
               
           )}
         >
         </FlatList>
         
         </View>
         <View style={styles.box}>
         <ListItem
         title="Log Out" 
        //  IconComponent={<Icons name="logout" backgroundColor='#ffe66d' />} 
        //  onPress={()=>{setUser(null)}}
         ></ListItem>
         
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginTop:10,

    },
    box:{
       marginVertical:5 ,
       backgroundColor:"#f5f5f5",
     
       
       
    },
  
    
})

export default Profile;