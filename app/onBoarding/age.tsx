import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const AgeScreen = () => {
  const [selectedAge, setSelectedAge] = useState<number>(18);
  const router = useRouter();

  // Example range of ages
  const ageRange = Array.from({ length: 83 }, (_, i) => i + 18); // Ages 18–100

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Progress Bar */}
      <View className="w-full mb-6">
        <View className="h-1 bg-gray-200 rounded-full w-full">
          <View className="h-1 bg-black rounded-full w-[28%]" />
        </View>
        <Text className="text-clashLight text-gray-500 font-clashMedium text-right mt-2">
          Step 2/7
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>
      </View>

      {/* Question */}
      <View className="justify-center items-center flex-1">
        <Text className="text-2xl font-clashBold text-center mb-2">
          How old are you?
        </Text>
        <Text className="text-gray-500 font-clashMedium text-center mb-6 px-2">
          This will help us personalize your product suggestions based on your
          age group.
        </Text>

        {/* Native Scroll Picker */}
        <View className="w-full h-48 border rounded-xl bg-neutral-100 overflow-hidden mb-10 justify-center">
          <Picker
            selectedValue={String(selectedAge)}
            onValueChange={(itemValue) => setSelectedAge(Number(itemValue))}
            style={{
              height: "100%",
              color: "black",
            }}
          >
            {ageRange.map((age) => (
              <Picker.Item
                key={age}
                label={`${age}`}
                value={String(age)}
                color="black"
              />
            ))}
          </Picker>
        </View>

        {/* Continue Button */}
        <Pressable
          className="bg-black py-4 rounded-xl items-center w-full"
          onPress={() => router.push("/onBoarding/skinType")}
        >
          <Text className="text-white font-clashBold">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AgeScreen;
