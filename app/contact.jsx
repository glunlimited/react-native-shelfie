import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <Link href="/" style={[styles.link, { marginTop: 20 }]}>
        <Text style={{ color: 'blue' }}>Back to Home</Text>
      </Link>
    </View>
  );
};

export default Contact;

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