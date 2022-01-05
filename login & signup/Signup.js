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

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center",marginTop:-100}}>
          <Image
            source={item.image}
            style={{ width: 200, height: 200, resizeMode:'stretch' }}
          ></Image>
       <View key={index} style={{ alignItems: "center",marginTop:-100,marginLeft:600}}>
          <Image
            source={item.image1}
            style={{ width: 130, height: 130, resizeMode:'stretch' }}
          ></Image>
        <View key={index} style={{ alignItems: "center",marginTop:-100,marginRight:900}}>
          <Image
            source={item.image2}
            style={{ width: 100, height: 100, resizeMode:'stretch' }}
          ></Image>
        </View>
        </View>
        </View>
      ))}

<StatusBar style="auto" />
      <View style={styles.inputView}>
        <View style={{ marginRight: '90%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="person-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Full Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
      <View style={{ marginRight: '90%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="key-sharp" size={24} />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View style={{ marginRight: '90%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="key-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          onChangeText={(cpassword) => setCpassword(cpassword)}
        />
      </View>

      
      
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
      
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View style={{ marginRight: '90%', alignItems:'center',justifyContent:'center',marginTop:10 }}>
          <Ionicons name="iphone-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          placeholderTextColor="#003f5c"
          onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
        />
      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image: require("././src/images/door1.png"),
    image1: require("././src/images/chicken.png"),
    image2: require("././src/images/fries.png"),
    position: 'top',
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