import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import BuisnessPhotos from './BuisnessPhotos';
import BuisnessAboutMe from './BuisnessAboutMe';

export default function BuisnessDetailsScreen() {
    const param=useRoute().params;
    const[buisness,setBuisness]=useState(param.buisness);
    const navigation=useNavigation();
    useEffect(()=>{
        
       
    },[])
  return buisness&&(
    <View>
    <ScrollView style={{height:'91%'}}>
      <TouchableOpacity style={styles.backBtnContainer}
      onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image source={{uri:buisness?.images[0]?.url}}
      style={{width:'100%',height:300}}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'outfit-bold',fontSize:25}}>{buisness?.name}</Text>
        <View style={styles.subContainer}>
        <Text style={{fontFamily:'outfit',color:Colors.PRIMARY,fontSize:20}}>{buisness?.contactPerson}</Text>
        <Text style={{color:Colors.PRIMARY,backgroundColor:Colors.PRIMARY_LIGHT,padding:5,borderRadius:5,fontSize:14}}>{buisness?.category.name}</Text>

        </View>
        <Text style={{fontSize:17,fontFamily:'outfit',color:Colors.GRAY}}><Ionicons name="location-sharp" size={25} color={Colors.PRIMARY} style={{marginRight:10}}/>{buisness?.address}</Text>
        <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20}}></View>
        <BuisnessAboutMe buisness={buisness}/>
        
        <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20}}></View>
        <BuisnessPhotos buisness={buisness}/>
      </View>
      
    </ScrollView>
    <View style={{
        display:'flex',
        flexDirection:'row',
        margin:8,
        gap:8
    }}>
        <TouchableOpacity style={styles.messagebtn}>
            <Text style={{textAlign:'center',fontFamily:'outfit',color:Colors.PRIMARY,fontSize:18}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn}>
            <Text style={{textAlign:'center',fontFamily:'outfit',color:Colors.WHITE,fontSize:18}}>Book Now</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    zIndex:10,
    padding:20
  },
  infoContainer:{
    padding:20,
    display:'flex',
    gap:7
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  messagebtn:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    flex:1
    


  },
  bookingBtn:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    flex:1

  }
})
