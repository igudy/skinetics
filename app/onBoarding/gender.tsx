import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const GenderScreen = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();

  const genders = [
    { label: "Female", icon: "female" },
    { label: "Male", icon: "male" },
  ];

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Progress Bar */}
      <View className="w-full mb-6">
        <View className="h-1 bg-gray-200 rounded-full w-full">
          <View className="h-1 bg-black rounded-full w-[14%]" />
        </View>

        <Text className="text-clashLight text-gray-500 font-clashMedium text-right mt-2">
          Step 1/7
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>
      </View>

      <View className="justify-center items-center flex-1">
        <Text className="text-2xl font-clashBold text-center mb-2">
          What's your gender?
        </Text>
        <Text className="text-gray-500 font-clashMedium text-center mb-6">
          This will help us adjust your routine steps based on your gender
        </Text>

        {/* Gender Options */}
        <View className="flex-row justify-between mb-10">
          {genders.map((gender) => {
            const isSelected = selectedGender === gender.label;
            return (
              <Pressable
                key={gender.label}
                onPress={() => setSelectedGender(gender.label)}
                className={`flex-1 items-center py-4 mx-1 rounded-2xl ${
                  isSelected ? "bg-black" : "bg-neutral-100"
                }`}
              >
                <Ionicons
                  name={gender.icon as any}
                  size={28}
                  color={isSelected ? "white" : "black"}
                />
                <Text
                  className={`mt-2 font-clashMedium ${
                    isSelected ? "text-white" : "text-black"
                  }`}
                >
                  {gender.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Continue Button */}
        <Pressable
          className="bg-black py-4 rounded-xl items-center"
          onPress={() => router.push("/onBoarding/age")}
          disabled={!selectedGender}
        >
          <Text className="text-white mx-7 font-clashBold">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GenderScreen;
