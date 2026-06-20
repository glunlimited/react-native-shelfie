import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text>Reading List App</Text>
      <Link href="/about" style={[styles.link, { marginTop: 20 }]}>
        <Text style={{ color: "blue" }}>About Page</Text>
      </Link>      
      <Link href="/contact" style={[styles.link, { marginTop: 20 }]}>
        <Text style={{ color: "blue" }}>Contact Page</Text>
      </Link>      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 20,
    borderBottomWidth: 1,
  }
});
