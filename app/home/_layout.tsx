import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomLabel = ({
  label,
  focused,
}: {
  label: string;
  focused: boolean;
}) => (
  <Text
    style={{
      fontFamily: "ClashDisplayMedium",
      fontSize: 12,
      color: focused ? "#8B5CF6" : "#6B7280",
    }}
  >
    {label}
  </Text>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 0,
          position: Platform.select({
            ios: "absolute",
            default: "relative",
          }),
        },
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel label="Homepage" focused={focused} />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? "#8B5CF6" : "#6B7280"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomLabel label="Notifications" focused={focused} />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="notifications-outline"
              size={size}
              color={focused ? "#8B5CF6" : "#6B7280"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
