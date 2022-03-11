import * as React from 'react';
import HomePage from './pages/HomePage';
import PokemonDetails from './pages/PokemonDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PokemonStack = (() => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomePage} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    )
})

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accueil"
          style={styles.header}
          component={PokemonStack}
          options={{
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
})

