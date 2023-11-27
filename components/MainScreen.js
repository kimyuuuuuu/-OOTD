import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          ...Platform.select({
            android: {
              backgroundColor: 'white',
            },
          }),
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size = {24} style={{ color: color }} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="menu" size = {24} style={{ color: color }} />,
        }}
      />
      <Tab.Screen
        name="AddMedia"
        component={AddMediaTab} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="add-circle" size = {24} style={{ color: color }} />,
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size = {24} style={{ color: color }} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size = {24} style={{ color: color }} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
