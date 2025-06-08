import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const skinTypes = [
  {
    label: "Dry",
    image: require("../../assets/images/skin/dry.png"),
  },
  {
    label: "Oily",
    image: require("../../assets/images/skin/oily.png"),
  },
  {
    label: "Normal",
    image: require("../../assets/images/skin/normal.png"),
  },
  {
    label: "Acne",
    image: require("../../assets/images/skin/acne.png"),
  },
  {
    label: "Combination",
    image: require("../../assets/images/skin/combination.png"),
  },
];

const SkinTypeScreen = () => {
  const [selectedSkin, setSelectedSkin] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Progress Bar and Back Arrow */}
      <View className="w-full mb-6">
        <View className="h-1 bg-gray-200 rounded-full w-full">
          <View className="h-1 bg-black rounded-full w-[42%]" />
        </View>
        <Text className="text-gray-500 text-sm text-right font-clashMedium mt-1">
          Step 3/7
        </Text>
      </View>

      <View className="flex-row justify-between items-center mb-2">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} />
        </Pressable>
      </View>

      {/* Title and Subtitle */}
      <View className="flex-1 justify-center items-center">
        <View className="items-center mb-8">
          <Text className="text-2xl font-clashBold text-center mb-2 font-clashBold">
            What's your skin type?
          </Text>
          <Text className="text-gray-500 font-clashMedium text-center px-4">
            Identifying your skin type allows us to offer more effective
            recommendations.
          </Text>
        </View>

        {/* Skin Type Options */}
        <View className="flex-row flex-wrap justify-center gap-4 mb-10">
          {skinTypes.map((type) => {
            const isSelected = selectedSkin === type.label;
            return (
              <Pressable
                key={type.label}
                onPress={() => setSelectedSkin(type.label)}
                className={`w-[100px] h-[100px] rounded-full overflow-hidden border-2 ${
                  isSelected ? "border-gray-600" : "border-transparent"
                }`}
              >
                <Image
                  source={type.image}
                  className="w-full rounded-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 justify-center items-center">
                  <Text className="text-white text-xs font-clashBold">
                    {type.label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Continue Button */}
        <Pressable
          className="bg-black py-4 rounded-xl items-center"
          onPress={() => router.push("/onBoarding/skinTone")}
          disabled={!selectedSkin}
        >
          <Text className="text-white font-clashBold mx-6">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SkinTypeScreen;
