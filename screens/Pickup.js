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

export default function Pickup({navigation}) {
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
  
    const isFastInCart= (pickup, cartItems)=>
      Boolean(cartItems.find((item)=> item.title === pickup.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {pickup.map((pickup,index)=>(
    <View key={index}>
    <View style={styles.fastItemStyle}>
      <BouncyCheckbox
      iconStyle={{borderColor:'lightgray', borderRadius:0}}
      fillColor='green'
      isChecked={isFastInCart(pickup,cartItems)}
      onPress={(checkboxValue)=>selectitem(pickup,checkboxValue)}/>
      
      <PickupInfo pickup={pickup}/>
      <PickupImage pickup={pickup}/>
      </View>
      <Divider width={0.5} orientation='vertical'/>
 
    </View>
    ))}
         <ViewCart navigation={navigation}/>
      </ScrollView>
  );
}

const PickupInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.pickup.title}</Text>
    <Text>{props.pickup.description}</Text>
    <Text>{props.pickup.price}</Text>
  </View>
);
const PickupImage=(props)=>(
    <View>
      <Image source={{uri:props.pickup.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
    </View>
  )
