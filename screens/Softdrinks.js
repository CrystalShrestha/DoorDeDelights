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
  description:'It`s the Real Thing"',
  price:'$1.70',
  image: 'https://images.heb.com/is/image/HEBGrocery/000145352'
},
{
  title: "Fanta",
  description:'Wanna Fanta, don`t you wanta? Fanta, Fanta because it is great fun and tastes. More Fanta. Less Serious.',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Mountain Dew",
  description:'Do the DEW',
  price:'$1.70',
  image: 'https://www.luluhypermarket.com/medias/450547-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMzUyMzF8aW1hZ2UvanBlZ3xoNzIvaGU2LzEyNDUxOTg3ODgyMDE0LzQ1MDU0Ny0wMS5qcGdfMTIwMFd4MTIwMEh8NDMxNDUzM2FkN2QxOGRkZWE4ZjY4MDdjM2NhYTE4MWY5YzU4ODdlMGY3OGNkZjk1YWM3YmE5ZjQ0ZjhkZGUzMg'
},
{
  title: "Pepsi",
  description:'That`s What I Like',
  price:'$1.70',
  image: 'https://images.heb.com/is/image/HEBGrocery/000026101?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
},
{
  title: "Dr.Pepper",
  description:' Be a Pepper. Be You',
  price:'$1.70',
  image: 'https://i5.walmartimages.com/asr/c1bd00b2-50a3-44ce-bb27-04177224fbd6.25a6500f2249f58f1fbd5909f2a264f7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
},
{
  title: "Sprite",
  description:'Obey Your Thirst',
  price:'$1.70',
  image: 'https://cheers.com.np/uploads/products/438481373780088939486339356725867799854.png'
},
{
  title: "Slice",
  description:'Thickest Mango Drink',
  price:'$1.70',
  image: 'http://www.grocyhub.com/image/cache/catalog/snacks_beverages/soft_drinks/pepsi/slice-soft-drink-mango-2ltr_1-800x800.jpg'
},
{
  title: "Red Bull",
  description:'Red Bull Gives You Wings',
  price:'$1.70',
  image: 'https://fatafatsewa.com/storage/media/3214/ykSeb02303.jpg'
},
{
  title: "7-up",
  description:'100% Natural. Crisp and clean. No caffeine.',
  price:'$1.70',
  image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h4d/h73/14584250728478/3793_main.jpg_480Wx480H'
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



export default function Softdrinks({navigation,hideCheckbox}) {
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
    <><ScrollView showsVerticalScrollIndicator={false}>
      {drinks.map((drink, index) => (
        <View key={index}>
          <View style={styles.drinkItemStyle}>
            {hideCheckbox ? (<></>) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                fillColor='green'
                isChecked={isDrinkInCart(drink, cartItems)}
                onPress={(checkboxValue) => selectitem(drink, checkboxValue)} />)}
            <DrinkInfo drink={drink} />
            <DrinkImage drink={drink} />
          </View>
          <Divider width={0.5} orientation='vertical' />

        </View>
      ))}

    </ScrollView><ViewCart navigation={navigation} /></>
  );
}

const DrinkInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.drink.title}</Text>
    <Text>{props.drink.description}</Text>
    <Text>{props.drink.price}</Text>
  </View>
);
const DrinkImage=(props)=>(
  <View>
    <Image source={{uri:props.drink.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
  </View>
)