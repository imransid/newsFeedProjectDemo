

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

// Import your screens
import GameScreen from '../screens/GameScreen';
import ChatScreen from "../screens/ChatScreen";
import NewsPage from "../screens/NewsPage";

// Import SVG Components for icons
import Ball from "@/assets/svg/ball";
import Board from "@/assets/svg/board";
import News from "@/assets/svg/news";
import RankComponent from '@/assets/svg/rank';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Create a Stack Navigator for GameScreen and ChatScreen
const GameStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const DemonStack = () => {
  return <>
    <Text>Coming Soon</Text>
  </>
}

// Root Stack Navigator
const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tab Navigator as part of Root Stack */}
      <Stack.Screen name="AppTabs" component={AppNavigator} />
      {/* ChatScreen is globally available */}
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};


const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Register') {
            return <Ball width={size} height={size} fill={color} />;
          } else if (route.name === 'Game board') {
            return <Board width={size} height={size} fill={color} />;
          } else if (route.name === 'Rank') {
            return <RankComponent width={size} height={size} fill={color} />;
          } else if (route.name === 'News') {
            return <News width={size} height={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: '#d9dedf',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#1F1B1B',
        },
        tabBarLabelStyle: {
          color: '#FFF',
          fontFamily: 'Rubik',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
        },
      })}
    >
      <Tab.Screen
        name="Register"
        component={DemonStack} // Use the stack navigator here
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Game board"
        component={GameStackNavigator} // Use the stack navigator here
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Rank"
        component={DemonStack} // Use the stack navigator here
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={NewsPage} // You can change this to any screen you want
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
