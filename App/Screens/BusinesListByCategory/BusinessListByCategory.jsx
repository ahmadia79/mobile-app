import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BuisnessListItem from './BuisnessListItem';
import Colors from '../../Utils/Colors';

export default function BusinessListByCategory() {
    const param=useRoute().params;
    const navigation=useNavigation();
    const [buisnessList,setBuisnessList]=useState([]);
    useEffect(()=>{
        
        param&&getBuisnessByCategory()
    },[param])

    const getBuisnessByCategory=()=>{
        GlobalApi.getBuisnessListByCategory(param.category).then(resp=>{setBuisnessList(resp.buisnessLists);})
    }
  return (
    <View style={{padding:20,paddingTop:30}}>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}
        onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{fontSize:25,fontFamily:'outfit'}}>{param?.category}</Text>

        </TouchableOpacity>
        {buisnessList?.length>0? <FlatList
        data={buisnessList}
        style={{marginTop:15}}
        renderItem={({item,index})=>(
            <BuisnessListItem buisness={item} />

        )}
        />:
        <Text style={{fontFamily:'outfit',fontSize:20,textAlign:'center',marginTop:'20%',color:Colors.GRAY}}> No Buisness Found</Text>}
    </View>
  )
}