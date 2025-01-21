import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
// Import your screens
import GameScreen from '../screens/GameScreen';
// import ActivitiesScreen from "../screens/GameScreen";



const NotificationsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Notifications Screen</Text>
  </View>
);

const MenuScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Menu Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Bookings') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Activities') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#004851',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
