import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native-web";
import BottomTabs from "../components/home/BottomTabs";
import { auth } from "../firebase";

export default function UserAccount() {
  const navigation=useNavigation()
  const handleLogout=()=>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace("Login")
    }).catch(error=>alert(error.message))
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} >
        <Text style={styles.loginText}> Logout</Text>
      </TouchableOpacity>
        {/* Yaha Hardcode GARNE! */}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  logoutBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: -1,
    backgroundColor: "#ffffff",
  },
});
