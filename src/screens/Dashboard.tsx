import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import UserInfo from "./UserInfo";
import FindNearbyStations from "./FindNearbyStations";
import TransactionHistory from "./TransactionHistory";
const Tab = createBottomTabNavigator();
function Dashboard({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Find" component={FindNearbyStations} />
      <Tab.Screen name="TransactionHistory" component={TransactionHistory} />
      <Tab.Screen name="UserInfo" component={UserInfo} />
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
