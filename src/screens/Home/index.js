import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./Profile";
import HistoryScreen from "./History";
import ScannerScreen from "./Scanner";
const Tab = createBottomTabNavigator();

export default HomeNavigator = () => {
  const screenOptions = {
    tabBarItemStyle: {
      marginVertical: 5,
    },
    headerShown: false,
  };

  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      activeColor="#00aea2"
      inactiveColor="#95a5a6"
      barStyle={{ backgroundColor: "#00aea2" }}
      tabBarOptions={{
        showLabel: true,
      }}
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Codes"
        component={HistoryScreen}
        options={{
          tabBarLabel: "Last",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-barcode-outline" {...{ color, size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" {...{ color, size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
