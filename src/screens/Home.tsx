import React from "react";
import { Button, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to FleetProSync</Text>
      <Text>a one stop shop for all your fleet management needs.</Text>
    </View>
  );
}

export default Home;
