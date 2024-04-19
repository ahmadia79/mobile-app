import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'



export default function BuisnessListItems({buisness}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:buisness?.images[0]?.url}}
        style={styles.image}
      
      />
      <View style={styles.infoContainer}>
        <Text style={{}}>{buisness?.name}</Text>
        <Text style={{color:Colors.GRAY}}>{buisness?.contactPerson}</Text>
        <Text style={{
          padding:3,
          color:Colors.PRIMARY,
          backgroundColor:Colors.PRIMARY_LIGHT,
          borderRadius:3,
          alignSelf:'flex-start',
          paddingHorizontal:7
        }}>{buisness?.category.name}</Text>
  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10

    },
  image:{
    width:160,
    height:100,
    borderRadius:10

  },
  infoContainer:{
    width:160,
    height:100,
    borderRadius:10
  }
})
