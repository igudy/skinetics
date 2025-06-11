import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Homepage = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#EDE8D0] items-center justify-center">
      <Text className="text-black">Homepage</Text>
    </SafeAreaView>
  );
};

export default Homepage;
