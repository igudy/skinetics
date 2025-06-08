import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const skinTypes = [
  {
    label: "Black/white heads",
    image: require("../../assets/images/skin/skin1.png"),
  },
  {
    label: "Dark Undereyes",
    image: require("../../assets/images/skin/skin2.png"),
  },
  {
    label: "Hyper-Pigmentation",
    image: require("../../assets/images/skin/skin3.png"),
  },
  {
    label: "Roughness",
    image: require("../../assets/images/skin/skin4.png"),
  },
  {
    label: "Sensitivity",
    image: require("../../assets/images/skin/skin5.png"),
  },
  {
    label: "Wrinkles",
    image: require("../../assets/images/skin/skin6.png"),
  },
  {
    label: "Dullness",
    image: require("../../assets/images/skin/skin7.png"),
  },
  {
    label: "Large Pores",
    image: require("../../assets/images/skin/skin8.png"),
  },
  {
    label: "Acne Scars",
    image: require("../../assets/images/skin/skin9.png"),
  },
];

const Concerns = () => {
  const [selectedSkin, setSelectedSkin] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Progress Bar and Back Arrow */}
      <View className="w-full mb-6">
        <View className="h-1 bg-gray-200 rounded-full w-full">
          <View className="h-1 bg-black rounded-full w-[70%]" />
        </View>
        <Text className="text-gray-500 text-sm text-right font-clashMedium mt-1">
          Step 5/7
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
            What are your skin concerns?
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
                className={`w-[100px] items-center  ${
                  isSelected ? "border-gray-600" : "border-transparent"
                }`}
              >
                <Image
                  source={type.image}
                  className={`w-[100px] h-[100px] rounded-full border-2  ${
                    isSelected ? "border-gray-600" : "border-transparent"
                  }`}
                  resizeMode="cover"
                />
                <Text className="text-black text-xs font-clashMedium text-center mt-1">
                  {type.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Continue Button */}
        <Pressable
          className="bg-black py-4 rounded-xl items-center"
          onPress={() => router.push("/onBoarding/experience")}
          disabled={!selectedSkin}
        >
          <Text className="text-white font-clashBold mx-6">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Concerns;
