import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, SignIn, SignUp, Home, CashOnHand, CashOnBank } from "../pages";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CashOnHand" component={CashOnHand} options={{ headerShown: false }} />
      <Stack.Screen name="CashOnBank" component={CashOnBank} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
