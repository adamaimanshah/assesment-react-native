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

const RegisterScreen = ({ navigation }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const logoImage = require("../image/people2.png");
  const handleBackPress = () => {
    navigation.navigate("FirstScreen");
  };

  const handleRegisterPress = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      // Show alert message for empty fields
      alert("Please fill in all the fields.");
      return;
    }

    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      navigation.navigate("Login");
    }, 1000);
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
      <Image source={logoImage} style={styles.image} />
      <Text style={styles.logo}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#646363"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#646363"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#646363"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegisterPress}
      >
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
      {isRegistered && (
        <Text style={styles.successText}>Register Successfully!</Text>
      )}
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    fontWeight: "bold",
    fontSize: 20,
    color: "#636363",
    marginBottom: 20,
  },
  inputView: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 40,
    color: "#363636",
  },
  registerButton: {
    width: "70%",
    backgroundColor: "#C86FAE",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  registerText: {
    color: "#ffffff",
  },
  loginText: {
    color: "#232424",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  successText: {
    marginTop: 10,
    color: "green",
  },
});

export default RegisterScreen;
