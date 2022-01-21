import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
    drinkItemStyle: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
    },
    titleStyle:{
      fontSize:19,
      fontWeight:'600'
    }
})



export default function Softdrinks({navigation,hideCheckbox, marginLeft}) {
  const dispatch= useDispatch();

const selectitem = (item, checkboxValue)=>
dispatch({
  type:'ADD_TO_CART', 
  payload:{
    ...item,
    checkboxValue:checkboxValue}
})
const  cartItems= useSelector(
  state=> state.cartReducer.selectedItems.items 
  );

  const isDrinkInCart= (drink, cartItems)=>
    Boolean(cartItems.find((item)=> item.title === drink.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {drinks.map((drink,index)=>(
    <View key={index}>
    <View style={styles.drinkItemStyle}>
      {hideCheckbox?(<></>):(
      <BouncyCheckbox
      iconStyle={{borderColor:'lightgray', borderRadius:0}}
      fillColor='green'
      isChecked={isDrinkInCart(drink,cartItems)}
      onPress={(checkboxValue)=>selectitem(drink,checkboxValue)}/>)}
      <DrinkInfo drink={drink}/>