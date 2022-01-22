import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const items = [
  {
    image1: require("../../assets/images/shopping-bag.png"),
    text1: "Pick-up",
  },
  {
   image2: require("../../assets/images/soft-drink.png"),
    text2: "Soft Drinks",
  },
  {
    image3: require("../../assets/images/bread.png"),
    text3: "Bakery Items",
  },
];

export default function Categories() {

  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Pickup */}
        <TouchableOpacity >
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={require("../../assets/images/shopping-bag.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>Pickup</Text>
          </View>
        </TouchableOpacity>
       {/* Softdrinks */}
       <TouchableOpacity >
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/soft-drink.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Softdrinks
            </Text>
          </View>
        </TouchableOpacity>

        {/* Bakery */}
        <TouchableOpacity >
          <View style={{ alignItems: "center", marginRight: -55 }}>
            <Image
              source={require("../../assets/images/bread.png")}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
                marginRight: 100,
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900", marginLeft: -85 }}>
              Bakery{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
