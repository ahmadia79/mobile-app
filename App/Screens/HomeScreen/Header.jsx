import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header(user) {
  return user&&(
    <View style={styles.container}>
        <View style={styles.profileMainConatiner}>
            <View>
                <Text style={{color:Colors.WHITE, fontSize:25,fontFamily:'outfit-bold',marginTop:30}}>Home Page</Text>

        </View>   
    
        <FontAwesome name="bookmark-o" size={27} style={{marginTop:30}}
         color="white" />
        </View>
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search'
            style={styles.TextInput}/>
            <FontAwesome name="search"
            style={styles.searchbtn} size={24} color={Colors.PRIMARY} />
            
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    profileMainConatiner:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        

    },
    profileConatiner:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        gap:10

    },
    TextInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16

    },
    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },
    searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    }
})
