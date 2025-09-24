import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/theme';
import { RootStackParamList, TabParamList } from '../types';

import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

import IntentScreen from '../screens/main/IntentScreen';
import ChatScreen from '../screens/main/ChatScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import QuestionnaireScreen from '../screens/main/QuestionnaireScreen';

import { useAuth } from '../hooks/useAuth';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.gray.medium,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text
              style={{
                fontSize: 22,
                color: focused ? Colors.white : Colors.gray.medium,
              }}
            >
              💬
            </Text>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabLabel,
                { color: focused ? Colors.white : Colors.gray.medium },
              ]}
            >
              Chat
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Intent"
        component={IntentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text
              style={{
                fontSize: 22,
                color: focused ? Colors.white : Colors.gray.medium,
              }}
            >
              ∞
            </Text>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabLabel,
                { color: focused ? Colors.white : Colors.gray.medium },
              ]}
            >
              Intent
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text
              style={{
                fontSize: 22,
                color: focused ? Colors.white : Colors.gray.medium,
              }}
            >
              👤
            </Text>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabLabel,
                { color: focused ? Colors.white : Colors.gray.medium },
              ]}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2C2C2E',
    borderTopWidth: 0,
    height: 90,
    paddingTop: 15,
    paddingBottom: 30,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});

export default AppNavigator;
