import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';


const chefs=[
  {
  title: "Chef Noah",
  description:'',
  contact:'98563214',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpcL8mapuA3ILF0XeuOj4vSIq4RQDd6AFlA&usqp=CAU'
},
{
  title: "Chef Anna",
  description:'',
  contact:'987456321',
  image: 'https://st4.depositphotos.com/22230270/23669/v/1600/depositphotos_236693120-stock-illustration-illustration-female-chef-cartoon.jpg'
},
{
  title: "Chef John",
  description:'',
  contact:'9865325632',
  image: 'https://image.freepik.com/free-vector/cute-chef-boy-holding-ladle-soup-chef-cartoon_296684-321.jpg'
},
{
  title: "Chef Oliver",
  description:'',
  contact:'984563216',
  image: 'https://img.freepik.com/free-vector/cute-chef-boy-holding-pizza-chef-cartoon_296684-319.jpg?size=338&ext=jpg'
},
{
  title: "Chef Edward",
  description:'',
  contact:'986125369',
  image: 'https://static.vecteezy.com/system/resources/previews/002/042/980/original/cartoon-pizza-chef-vector.jpg'
},
{
  title: "Chef Sophie",
  description:'',
  contact:'987456325',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOCylq3PGQ1fsDxQKPOgzQY2qe1FEkQfLxg&usqp=CAU'
},
{
  title: "Chef Bob",
  description:'',
  contact:'985632147',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pYT4iiHZITcnj8vi0ry_mzdm3eVtEQebfA&usqp=CAU'
},
{
  title: "Chef Edward",
  description:'',
  contact:'987456321',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZHCpUJnnaptDUCgtPeqDRI0fmm7vnaigng&usqp=CAU'
},


];

const styles = StyleSheet.create({
    chefItemStyle: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
    },
    titleStyle:{
      fontSize:19,
      fontWeight:'600'
    }
})

export default function HomeChef() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {chefs.map((chef,index)=>(
    <View key={index}>
    <View style={styles.chefItemStyle}>
      <ChefInfo chef={chef}/>
      <ChefImage chef={chef}/>
      </View>
      <Divider width={0.5} orientation='vertical'/>
 
    </View>
    ))}
      </ScrollView>
  );
}

const ChefInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.chef.title}</Text>
    <Text>{props.chef.description}</Text>
    <Text>{props.chef.contact}</Text>
  </View>
);
const ChefImage=(props)=>(
  <View>
    <Image source={{uri:props.chef.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
  </View>
)
