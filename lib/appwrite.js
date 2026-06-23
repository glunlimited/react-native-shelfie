import {Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
.setProject("6a35ae450016694347c8") // Your project ID
.setPlatform("dev.glunlimited.shelfie"); // Set the platform to React Native

export const account = new Account(client);
export const avatars = new Avatars(client);