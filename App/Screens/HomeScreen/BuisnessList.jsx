import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BuisnessListItems from './BuisnessListItems';

export default function BuisnessList() {
    const [buisnessList,setBuisnessList]=useState([]);
    useEffect(()=>{
        getBuisnessList();
    },[])
    const getBuisnessList=()=>{
        GlobalApi.getBuisnessList().then(resp=>{
            console.log(resp);
            setBuisnessList(resp.buisnessLists)
        })
    }
  return (
    <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
      <Heading text={'Latest Buisness'} isViewAll={true} />
      <FlatList
      data={buisnessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{marginRight:10}}>
           <BuisnessListItems buisness={item} /> 
        </View>
      )}
      />
    </View>
  )
}