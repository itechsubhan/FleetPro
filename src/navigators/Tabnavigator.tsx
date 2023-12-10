import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import PaymentScreen from "./PaymentScreen";
import { View } from "react-native";
import CartScreen from "../screens/CartScreen";
import Dashboard from "../screens/Dashboard";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="CartScreen" component={CartScreen}></Tab.Screen>
        <Tab.Screen name="Dashboard" component={Dashboard}></Tab.Screen>
        <Tab.Screen name="PaymentsScreen" component={PaymentScreen}></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
