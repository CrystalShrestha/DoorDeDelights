import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  export default function () {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 10,
              width: "100%",
              backgroundColor: "#000",
              height: 150,
            }}
          >
            <View>
              {/* <TouchableOpacity> */}
                <View
                  key={index}
                  style={{ alignItems: "center", marginTop: -100 }}
                >
                  <Image
                    source={item.image1}
                    style={{ width: 200, height: 200, resizeMode: "stretch" }}
                  ></Image>
                </View>
              {/* </TouchableOpacity> */}
            </View>
          </View>
          <View
            key={index}
            style={{ width: 140, height: 140, borderRadius: 100, marginTop: -70 }}
          >
            <Image
              source={item.image5}
              style={{ width: 200, height: 200 }}
            ></Image>
            <Text style={{ fontsize: 25, fontWeight: "bold", padding: 10 }}>
              {" "}
              UserName{" "}
            </Text>
            <Text style={{ fontsize: 18, fontWeight: "bold", color: "grey" }}>
              {" "}
              25, Male{" "}
            </Text>
          </View>
  
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "centre",
              backgroundColor: "#fff",
              widtgh: "  90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}
          >
            <View key={index}>
              <Image
                source={item.image4}
                style={{ width: 200, height: 200, resizeMode: "stretch" }}
              ></Image>
            </View>
  
            <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Manjil Maharjan
            </Text>
          </View>
  
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "centre",
              backgroundColor: "#fff",
              widtgh: "  90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}
          >
            <View key={index}>
              <Image
                source={item.image3}
                style={{ width: 200, height: 200, resizeMode: "stretch" }}
              ></Image>
            </View>
            <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              ***********
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "centre",
              backgroundColor: "#fff",
              widtgh: "  90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}
          >
            <View key={index}>
              <Image
                source={item.image1}
                style={{ width: 200, height: 200, resizeMode: "stretch" }}
              ></Image>
            </View>
  
            <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Kathmandu,Nepal
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "centre",
              backgroundColor: "#fff",
              widtgh: "  90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginBottom: 40,
              backgroundColor: "#000",
            }}
          >
            <View key={index}>
              <Image
                source={item.image1}
                style={{ width: 200, height: 200, resizeMode: "stretch" }}
              ></Image>
            </View>
  
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              LOGOUT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  //Image
  const item = [
    {
      image1: require("../assets/images/Location.png"),
      image2: require("../assets/images/blackscreen.png"),
      image3: require("../assets/images/Password.png"),
      image4: require("../assets/images/Username.png"),
      image5: require("../assets/images/userpicture.png"),
    },
  ];
  