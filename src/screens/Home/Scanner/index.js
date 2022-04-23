import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import BarCodeScannerScreen from "./BarCodeScanner";
import ReviewsDetail from "./ReviewsDetail";
import ScannerBaseScreen from "./ScannerBaseScreen";

const ScannerScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ScannerBase" component={ScannerBaseScreen} />
      <Stack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} />
      <Stack.Screen name="ReviewsDetail" component={ReviewsDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
});

export default ScannerScreen;
