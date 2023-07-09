import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate username and password
    if (username.trim() !== "" && password.trim() !== "") {
      // Navigate to the ProfileScreen
      navigation.navigate("Profile", { username: username });
    } else {
      // Display an error message or perform appropriate actions for invalid login
      alert("Invalid username or password!");
    }
  };

  const handleBackPress = () => {
    navigation.navigate("FirstScreen"); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <AntDesign
          name="leftcircleo"
          size={35}
          color="#525252"
          marginTop={20}
        />
      </TouchableOpacity>
      <Image source={require("../image/people1.png")} style={styles.logo} />
      <Text style={styles.loginText}>Login</Text>
      <View style={[styles.inputView, styles.glow]}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#646363"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={[styles.inputView, styles.glow]}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#646363"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC7EE",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 0,
    marginTop: 20,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#636363",
    marginBottom: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#363636",
  },
  glow: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButton: {
    width: "80%",
    backgroundColor: "#C86FAE",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#ffffff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});

export default LoginScreen;
