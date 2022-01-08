import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import navigation from "../navigation";
import { auth } from "../firebase";
import firebase from "firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
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
import { add } from "react-native-reanimated";

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
