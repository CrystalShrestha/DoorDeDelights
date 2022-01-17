import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const pickup=[
    {
    title: "French Fries",
    description:'Crunchy on outside and soft on the inside french fries with our own recipe of cocktail sauce.',
    price:'$3.90',
    image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/12/homemade-french-fries-5.jpg'
  },
  {
    title: "Tacos",
    description:'Fresh made Tacos, with Mexican touchups.',
    price:'$4.70',
    image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/013/951/original/tacos.jpg?1627261197'
  },
  {
    title: "Hotdogs",
    description:'With big dogs and mustard.',
    price:'$7.00',
    image: 'https://www.springlane.de/magazin/wp-content/uploads/2017/08/Hot-Dog-mit-Avocado-Relish_Reshoot_67360_featured.jpg'
  },
  {
    title: "Crunchy Fried Chicken",
    description:'Cripsy, crunchy and finger licking good.',
    price:'$12.50',
    image: 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'
  },
  {
    title: "Chicken Nuggets",
    description:'5 piece nuggets,crispy and filling.',
    price:'$5.00',
    image: 'https://www.seriouseats.com/thmb/aZ3RKlIllcKUTZV_GWyddjIZZEs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200416-chicken-nuggets-tim-chin-5-eeb817c772bc4a5c884d088abd85d13f.jpg'
  },
  {
    title: "Mac & Cheese",
    description:'Creamy and filling.',
    price:'$9.40',
    image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/07/bacon-mac-and-cheese-4.jpg'
  },
  {
    title: "Breakfast Burrito",
    description:'Start your day with filling burrito.',
    price:'$1.70',
    image: 'https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg'
  },
  {
    title: "Hamburger",
    description:'The one Baruto likes.',
    price:'$10.70',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg'
  },
  {
    title: "Veg Burger",
    description:'With goodness of all the veggies you want.',
    price:'$7.70',
    image: 'https://manofmany.com/wp-content/uploads/2020/01/McDonalds-McVeggie-Burger-1.jpg'
  },
  {
    title: "Onion Rings",
    description:'Why get fries when onion ringsare there.',
    price:'$2.00',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg'
  },
  
  ];

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