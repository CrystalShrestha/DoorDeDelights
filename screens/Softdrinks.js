import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const drinks=[
  {
  title: "Coca-cola",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://images.heb.com/is/image/HEBGrocery/000145352'
},
{
  title: "Fanta",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Mountain Dew",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Pepsi",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Dr.Pepper",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Sprite",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Slice",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Red Bull",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Slice",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},


];




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
