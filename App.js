import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import AuthenticationNavigator from "./src/screens/Authentication";
import HomeNavigator from "./src/screens/Home";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
          {/* <Stack.Screen name="Home" component={BaseScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
