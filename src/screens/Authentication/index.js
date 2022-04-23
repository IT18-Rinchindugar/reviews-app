import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingScreen } from "./Onboarding";

const AuthenticationStack = createStackNavigator();

export default AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
    </AuthenticationStack.Navigator>
  );
};
