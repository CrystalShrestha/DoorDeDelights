import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center",marginTop:-100}}>
          <Image
            source={item.image1}
            style={{ width: 200, height: 200, resizeMode:'stretch' }}
          ></Image>
                    <View key={index} style={{ alignItems: "center",marginTop:-100,marginRight:500}}>
          <Image
            source={item.image3}
            style={{ width: 100, height: 100, resizeMode:'stretch' }}
          ></Image>
          
        </View>
          
        </View>
      ))}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View style={{ marginRight: '90%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="mail-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

    </View>
  );
}

const items = [
  {
    image1: require("././src/images/door1.png"),
    image3: require("././src/images/fries.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: "30%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    height: 40,
    width: "80%",
    borderRadius: 25,
    flex: 1,
    padding: 15,
    marginLeft: 20,
    marginTop:-35,
    alignItems: 'center',
    bottom: 130,
  },

  forgot_button: {
    height: 30,
    position: "absolute",
    bottom: 130,
  },

  loginBtn: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 105,
    backgroundColor: "#ffffff",
  },
  signupBtn: {
    width: "20%",
    borderRadius: 25,
    position: "absolute",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 45,
    backgroundColor: "#ffffff",
  },
});
