import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const experienceOptions = [
  "Fix the concerns of my skin",
  "Discover skincare products",
  "Educate myself about skincare",
  "Learn more about my skin",
  "Apply home treatments",
  "Practice facial yoga (coming soon)",
];

const YourGoals = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Progress Bar */}
      <View className="w-full mb-4">
        <View className="h-1 bg-gray-200 rounded-full w-full">
          <View className="h-1 bg-black rounded-full w-[100%]" />
        </View>
        <Text className="text-gray-500 text-sm text-right font-clashMedium mt-1">
          Step 7/7
        </Text>
      </View>

      {/* Back Button */}
      <Pressable onPress={() => router.back()} className="mb-6">
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>

      <View className="flex-1 justify-center items-center">
        <View className="items-center mb-8">
          <Text className="text-2xl font-clashBold text-center mb-2">
            What are your goals?
          </Text>
          <Text className="text-gray-500 font-clashMedium text-center px-4">
            Choose as many as you want. This will help us imporve the app and
            your experience
          </Text>
        </View>

        <View className="gap-4 mb-10">
          {experienceOptions.map((option) => {
            const isSelected = selectedOption === option;
            return (
              <Pressable
                key={option}
                onPress={() => setSelectedOption(option)}
                className={` py-4 px-4 rounded-xl w-[300px] ${
                  isSelected ? "bg-black" : "bg-gray-200"
                }`}
              >
                <Text
                  className={`text-center font-clashMedium ${
                    isSelected ? "text-white" : "text-black"
                  }`}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          className="bg-black py-4 rounded-xl items-center"
          onPress={() => router.push("/onBoarding/checkYourProfile")}
          disabled={!selectedOption}
        >
          <Text className="text-white font-clashBold mx-6">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default YourGoals;
