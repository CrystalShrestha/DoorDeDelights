import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../../../Downloads/Login/Login/firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const items = [
  {
    image1: require("../images/door1.png"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#990F02",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: "80%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    height: 45,
    width: "80%",
    borderRadius: 25,
    flex: 1,
    padding: 15,
    marginLeft: 20,
    marginBottom: -220,
    alignItems: "center",
    bottom: 140,
  },

  forgot_button: {
    height: 30,
    position: "absolute",

    bottom: 130,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    bottom: -30,
    backgroundColor: "#ffffff",
  },
  signupBtn: {
    width: "40%",
    borderRadius: 50,

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: -50,
    backgroundColor: "#ffffff",
  },
});
