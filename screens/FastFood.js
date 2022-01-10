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

export default function Fastfood({navigation}) {
const dispatch= useDispatch();


const selectitem = (item, checkboxValue)=>dispatch({
  type:'ADD_TO_CART', 
  payload:{
    ...item,
    checkboxValue:checkboxValue}
})