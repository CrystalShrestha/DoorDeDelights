import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  fastItemStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20,
  },
  titleStyle:{
    fontSize:19,
    fontWeight:'600'
  }
})

export default function Deals({navigation}) {
const dispatch= useDispatch();


const selectitem = (item, checkboxValue)=>dispatch({
  type:'ADD_TO_CART', 
  payload:{
    ...item,
    checkboxValue:checkboxValue}
})
const  cartItems= useSelector(
  state=> state.cartReducer.selectedItems.items 
  );

  const isFastInCart= (deals, cartItems)=>
    Boolean(cartItems.find((item)=> item.title === deals.title));
return (
  <ScrollView showsVerticalScrollIndicator={false}>
  {deals.map((deals,index)=>(
  <View key={index}>
  <View style={styles.fastItemStyle}>
    <BouncyCheckbox
    iconStyle={{borderColor:'lightgray', borderRadius:0}}
    fillColor='green'
    isChecked={isFastInCart(deals,cartItems)}
    onPress={(checkboxValue)=>selectitem(deals,checkboxValue)}/>
    
    <DealsInfo deals={deals}/>
    <DealsImage deals={deals}/>
    </View>
    <Divider width={0.5} orientation='vertical'/>

  </View>
  ))}
       <ViewCart navigation={navigation}/>
    </ScrollView>
);
}

const DealsInfo=(props)=>(
<View style={{width:240, justifyContent:'space-evenly'}}>
  <Text style={styles.titleStyle}>{props.deals.title}</Text>
  <Text>{props.deals.description}</Text>
  <Text>{props.deals.price}</Text>
</View>
);
const DealsImage=(props)=>(
<View>
  <Image source={{uri:props.deals.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
</View>
)
