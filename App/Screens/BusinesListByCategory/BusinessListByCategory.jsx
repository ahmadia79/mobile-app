import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'

import GlobalApi from '../../Utils/GlobalApi';
import BuisnessListItem from './BuisnessListItem';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

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
        <PageHeading title={param.category}/>
        
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