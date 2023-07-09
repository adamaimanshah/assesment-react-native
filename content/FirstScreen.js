import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen({ navigation }) {
  const handleTextPress = () => {
    navigation.navigate("Register"); // Navigate to the "RegisterUser" screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../image/people.png")} style={styles.logo} />
        <Text style={styles.pinkText}>PiNK</Text>
      </View>
      <View style={[styles.contentContainer, styles.centeredContent]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[styles.button, styles.lessTransparentButton]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleTextPress} style={styles.textButton}>
          <Text style={styles.textreg}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFC7EE",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  centeredContent: {
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "50%",
    backgroundColor: "#C86FAE",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  lessTransparentButton: {
    backgroundColor: "#C86FAE",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    marginBottom: 0,
  },
  textButton: {
    marginBottom: 16,
  },
  pinkText: {
    color: "#FF69B4",
    fontSize: 90,
    fontWeight: "bold",
  },
  text: {
    color: "#545252",
    fontSize: 16,
    fontWeight: "bold",
  },
  textreg: {
    color: "#232424",
    fontSize: 16,
    fontWeight: "bold",
  },
});
