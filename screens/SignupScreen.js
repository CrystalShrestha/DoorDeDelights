import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { auth } from "../firebase";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const[address,setAddress]=useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const navigation = useNavigation();
  const [data, setData] = React.useState({
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })


  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }

  const handleSignup = () => {
    if (password!==cpassword){
      alert("Password dont match")
      return
    }
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      const uid = response.user.uid
      const data ={
        id: uid,
        email:email,
        name:name,
        address:address,
        phonenumber:phonenumber
      }


      const userRef= firebase.firestore().collection('users')
      userRef
        .doc(uid)
        .set(data)
        .then(() => {
          navigation.navigate('Home, {user: data')
          
        })
        .catch((error) => {
          alert(error)
        })
    })
    .catch((error) => {
      alert(error)
    })
  }


  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginTop: -100 }}>
          <Image
            source={item.image}
            style={{ width: 200, height: 200, resizeMode: "stretch" }}
          ></Image>
        </View>
      ))}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="person-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Full Name."
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          
        </View>
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Icon name="check" color="black" size={24} style={{marginLeft:240,bottom:-2}} />
          </TouchableOpacity>
          <Ionicons name="key-sharp" size={24}style={{marginRight:240,marginBottom:-20, bottom:23}} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          value={password}
          placeholderTextColor="#003f5c"
          onChangeText={password => setPassword(password)}
          secureTextEntry={data.secureTextEntry ? true : false}
        />
      </View>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            
          }}
        >
          
        </View>
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Icon name="check" color="black" size={24} style={{marginLeft:240,bottom:-2}} />
          </TouchableOpacity>
          <Ionicons name="key-sharp" size={24} style={{marginRight:240, marginBottom:-20,bottom:23}} />
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          value={cpassword}
          placeholderTextColor="#003f5c"
          onChangeText={cpassword => setCpassword(cpassword)}
          secureTextEntry={data.secureTextEntry ? true : false}
        />
      </View>

{/* //hewooo */}
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="home-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Address."

          value={address}
          placeholderTextColor="#003f5c"
          onChangeText={address => setAddress(address)}
          
        />
      </View>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="mail-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          // onChange={(event) => {
          //   setEmail(event.target.value);
          // }}
          value={email}
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View
          style={{
            marginRight: "80%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Ionicons name="calculator-sharp" size={24} />
        </View>

        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          // onChange={(event) => {
          //   setPhonenumber(event.target.value);
          // }}
          value={phonenumber}
          placeholderTextColor="#003f5c"
          onChangeText={text => setPhonenumber(text)}
        />
      </View>

      <TouchableOpacity onPress={handleSignup} style={styles.signupBtn}>
        <Text style={styles.signupText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const items = [
  {
    image: require("../images/door1.png"),
    position: "top",
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
    width: "70%",
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
    marginBottom: -220,
    alignItems: "center",
    bottom: 130,
  },

  signupBtn: {
    width: "40%",
    borderRadius: 25,

    height: 45,
    alignItems: "center",
    justifyContent: "center",
    bottom: -40,
    backgroundColor: "#ffffff",
  },
});