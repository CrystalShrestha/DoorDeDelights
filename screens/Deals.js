import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const deals=[
  {
  title: "French Fries",
  description:'30% off on fries',
  price:'$1.20',
  image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/12/homemade-french-fries-5.jpg'
},
{
  title: "momo",
  description:'Buy one get one free momo',
  price:'$1.70',
  image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/013/951/original/tacos.jpg?1627261197'
},
{
  title: "Chowmein",
  description:'20% off on chowmenin',
  price:'$1.70',
  image: 'https://www.springlane.de/magazin/wp-content/uploads/2017/08/Hot-Dog-mit-Avocado-Relish_Reshoot_67360_featured.jpg'
},
{
  title: "Fried Rice",
  description:'20% off on fried rice',
  price:'$1.70',
  image: 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'
},
{
  title: "Naan",
  description:'20% off on naan',
  price:'$1.70',
  image: 'https://www.seriouseats.com/thmb/aZ3RKlIllcKUTZV_GWyddjIZZEs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200416-chicken-nuggets-tim-chin-5-eeb817c772bc4a5c884d088abd85d13f.jpg'
},
{
  title: "Mac & Cheese",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/07/bacon-mac-and-cheese-4.jpg'
},
{
  title: "Breakfast Burrito",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg'
},
{
  title: "Hamburger",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg'
},
{
  title: "Veg Burger",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://manofmany.com/wp-content/uploads/2020/01/McDonalds-McVeggie-Burger-1.jpg'
},
{
  title: "Onion Rings",
  description:'chill your mind out',
  price:'$1.70',
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
