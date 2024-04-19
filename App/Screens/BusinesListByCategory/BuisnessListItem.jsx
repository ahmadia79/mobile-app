import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function BuisnessListItem({buisness}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:buisness?.images[0]?.url}}
      style={styles.image} />
      <View style={styles.subContainer}>
       <Text style={{fontFamily:'outfit',color:Colors.GRAY,fontSize:15}}>{buisness.contactPerson}</Text>
       <Text style={{fontSize:19,fontFamily:'outfit-bold'}}>{buisness.name}</Text>
       <Text style={{fontFamily:'outfit',color:Colors.GRAY,fontSize:16}}>
       <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} style={{marginRight:10}}/>{buisness.address}</Text>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRaduis:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    subContainer:{
        display:'flex',
        gap:8
    },

  image:{
    width:100,
    height:100,
    borderRadius:15
  }
})
