import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = ({ route }) => {
  const { username } = route.params;
  const profileImage = require("../image/Avatar.png"); // Replace with the path to your profile image

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
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
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.welcomeText}>Welcome {username}!</Text>
      <Text style={styles.usernameText}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC7EE",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#525252",
  },
  usernameText: {
    fontSize: 18,
    color: "#888888",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});

export default Profile;
