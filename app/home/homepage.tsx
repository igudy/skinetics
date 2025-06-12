import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Bell } from "lucide-react-native";

export default function Homepage() {
  const skinTypes = [
    {
      name: "Dry",
      key: "dry",
      image: require("../../assets/images/skin/dry.png"),
    },
    {
      name: "Acne",
      key: "acne",
      image: require("../../assets/images/skin/acne.png"),
    },
    {
      name: "Combination",
      key: "combination",
      image: require("../../assets/images/skin/combination.png"),
    },
  ];

  const dermatologists = [
    {
      id: 1,
      name: "Dr. Jane Cooper",
      title: "Senior Dermatologist",
      experience: "10+ years Experience",
      rating: "⭐ 5.0",
      image: require("../../assets/images/home/derma.png"),
    },
    {
      id: 2,
      name: "Dr. Sarah Smith",
      title: "Cosmetic Dermatologist",
      experience: "8+ years Experience",
      rating: "⭐ 4.9",
      image: require("../../assets/images/home/derma.png"),
    },
    {
      id: 3,
      name: "Dr. Michael Johnson",
      title: "Pediatric Dermatologist",
      experience: "12+ years Experience",
      rating: "⭐ 5.0",
      image: require("../../assets/images/home/derma.png"),
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Leslie Alexander",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Very satisfied with the results!",
      avatar: require("../../assets/images/home/homeAvatar1.png"),
    },
    {
      id: 2,
      name: "Jane Cooper",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Excellent service and professional care.",
      avatar: require("../../assets/images/home/homeAvatar2.png"),
    },
    {
      id: 3,
      name: "Robert Fox",
      rating: "⭐⭐⭐⭐",
      comment: "Very satisfied with the results!",
      avatar: require("../../assets/images/home/homeAvatar1.png"),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-3xl font-clashBold text-black">Glow Skin</Text>
        <Bell size={20} color="black" />
      </View>

      {/* Face Scan */}
      <View className="items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <Image
          source={require("../../assets/images/home/scan_face.png")}
          className="w-full h-56 object-cover"
        />
        <TouchableOpacity className="absolute bottom-4 bg-white px-4 py-2 rounded-lg shadow">
          <Text className="text-black font-clashMedium">Tap to scan</Text>
        </TouchableOpacity>
      </View>

      {/* Range of Products */}
      <Text className="text-xl font-clashMedium mt-6 mb-2">
        Range of products
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="bg-gray-100 py-4"
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        <View className="flex-row gap-4">
          {skinTypes.map((type) => (
            <View
              key={type.key}
              className="w-[200px] bg-white rounded-lg p-3 flex-row items-center justify-between"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <View className="flex-1">
                <Text className="text-sm font-clashMedium text-black mb-2">
                  Products for {type.name.toLowerCase()} skin
                </Text>
                <TouchableOpacity className="bg-black px-3 py-1.5 rounded-full self-start">
                  <Text className="text-white text-xs font-clashBold">
                    Explore
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="relative w-16 h-16">
                <Image
                  source={type.image}
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/20 rounded-full justify-center items-center">
                  <Text className="text-white text-xs font-clashBold">
                    {type.name}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Consult Dermatologist */}
      <Text className=" font-clashMedium text-xl mt-6 mb-2">
        Consult Dermatologist
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        className="bg-gray-50"
      >
        {dermatologists.map((doc) => (
          <View
            key={doc.id}
            className="bg-gray-100 rounded-lg flex-row items-center mr-4"
            style={{ width: 320 }}
          >
            <Image
              source={doc.image}
              className="w-[120px] h-[120px] rounded-full m-4 border-white border-2"
              resizeMode="contain"
            />
            <View className="flex-1 pr-4 py-2">
              <Text className="text-black font-clashBold text-xl">
                {doc.name}
              </Text>
              <Text className="font-clashMedium text-sm text-gray-500">
                {doc.title}
              </Text>
              <Text className="font-clashMedium text-sm text-gray-500">
                {doc.experience}
              </Text>
              <Text className="font-clashMedium text-sm text-black mt-1">
                {doc.rating}
              </Text>
              <TouchableOpacity className="bg-black w-[100px] mt-3 px-3 py-1.5 rounded-full">
                <Text className="text-white font-clashMedium text-sm">
                  Know more
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Know your skin */}
      <Text className="text-2xl font-clashMedium mt-6 mb-2">
        Know your skin
      </Text>
      <View className="bg-gray-100 p-4 rounded-lg flex-row items-center">
        <View className="flex-1">
          <Text className="text-lg text-black font-clashMedium mb-7">
            Let's personalize your profile
          </Text>
          <TouchableOpacity className="bg-black px-4 py-2 rounded-full w-32">
            <Text className="text-white text-center text-sm">Start now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/images/home/check.png")}
          className=""
        />
      </View>

      {/* Results */}
      <Text className="text-2xl font-clashMedium mt-6 mb-2">Our results</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 16,
          paddingVertical: 8,
          gap: 16,
        }}
      >
        {reviews.map((review) => (
          <View
            key={review.id}
            className="bg-gray-100 p-4 rounded-lg"
            style={{ width: 280 }}
          >
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={review.avatar}
                className="w-10 h-10 rounded-full"
                resizeMode="cover"
              />
              <View className="flex-col">
                <Text className="text-black font-medium">{review.name}</Text>
                <Text className="text-yellow-500">{review.rating}</Text>
              </View>
            </View>
            <Text className="text-sm text-gray-600">{review.comment}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
