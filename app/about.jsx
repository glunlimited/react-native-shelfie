import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <Link href="/" style={[styles.link, { marginTop: 20 }]}>
        <Text style={{ color: 'blue' }}>Back to Home</Text>
      </Link>
    </View>
  );
};

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  }, 
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginVertical: 20,
    borderBottomWidth: 1,
  }
})