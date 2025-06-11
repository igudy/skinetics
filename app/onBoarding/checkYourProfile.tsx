import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function PasswordChanged() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      <Text className="text-2xl font-clashBold text-center mb-6">
        You can check your skin factors in profile section!
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        onPress={() => router.push("/home/Homepage")}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashMedium text-base">
          Go to Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}
