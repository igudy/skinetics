import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function AuthPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/splash.png")}
      resizeMode="cover"
      className="flex-1 w-full h-full"
    >
      <View className="flex-1 justify-end items-center pb-12 bg-black/30">
        {/* <Text className="text-white text-4xl font-bold mb-10 font-clashBold">
          Skinetics
        </Text> */}

        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="w-11/12 bg-white py-4 rounded-md mb-4"
        >
          <Text className="text-black text-center font-clashSemi text-base">
            Log in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/auth/register")}
          className="w-11/12 bg-black py-4 rounded-md"
        >
          <Text className="text-white text-center font-clashSemi text-base">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
