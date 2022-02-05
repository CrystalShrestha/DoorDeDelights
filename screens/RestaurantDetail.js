import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel ",
    price: "$21.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Sphagetti with Meatballs",
    description:
      "Drizzling Italian dish with spaghetti, tomato sauce and meatballs.",
    price: "$13.50",
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
  },
  {
    title: "Pizza",
    description:
      "Tasty Italian round bread dough topped with olive oil, tomatoes, cheeses, and other topings.🍕",
    price: "$19.20",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg",
  },

];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />

        <MenuItems restaurantName={route.params.name} foods={foods} />

        
      </ScrollView>
      <ViewCart navigation={navigation} />
    </SafeAreaView>
  );
}