import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import OrderHistoryScreen from "./OrderHistoryScreen";
const Tab = createBottomTabNavigator();
function Dashboard({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
    </Tab.Navigator>

    // <View>
    //   <SafeAreaView>
    //     <Text>Dashboard</Text>
    //     <Button title="Search Nearby Charging Stations" />
    //     <Button title="View Charging History" />
    //     <Button title="View Vehicle Information" />
    //     <Button title="View Vehicle Maintenance History" />
    //     <Button title="View Vehicle Maintenance Schedule" />
    //   </SafeAreaView>
    // </View>
  );
}

export default Dashboard;
