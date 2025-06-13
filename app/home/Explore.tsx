import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { ChevronLeft, Search, ShoppingBag } from "lucide-react-native";
import { useRouter } from "expo-router";

const ingredients = [
  {
    name: "Allantoin",
    image: require("../../assets/images/explore/ingred1.png"),
  },
  {
    name: "Alpha Lipoic Acid",
    image: require("../../assets/images/explore/ingred2.png"),
  },
  {
    name: "Glycolic Acid",
    image: require("../../assets/images/explore/ingred3.png"),
  },
  {
    name: "Beta Glucan",
    image: require("../../assets/images/explore/ingred4.png"),
  },
  {
    name: "Argan Oil",
    image: require("../../assets/images/explore/ingred5.png"),
  },
  {
    name: "Alpha Hydroxy",
    image: require("../../assets/images/explore/ingred4.png"),
  },
];

const recommendations = [
  {
    id: 1,
    title: "The beginner's guide to product types",
    category: "Skincare 101",
    image: require("../../assets/images/explore/face1.png"),
  },
  {
    id: 2,
    title: "The ultimate guide to rid of acne",
    category: "Acne",
    image: require("../../assets/images/explore/face2.png"),
  },
];

export default function Explore() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-clashBold text-gray-900">Academy</Text>
        <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
          <ShoppingBag size={20} color="black" />
        </TouchableOpacity>
      </View>

      <Text className="text-gray-500 text-sm font-clashMedium mt-1 mb-5">
        Expand your skincare knowledge to achieve perfect skin.
      </Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 px-4 py-2 rounded-xl mb-6">
        <Search size={18} color="gray" />
        <TextInput
          placeholder="Search the library"
          placeholderTextColor="#999"
          className="ml-2 flex-1 text-base"
        />
      </View>

      {/* Date & Recommendations */}
      <Text className="text-gray-900 font-clashMedium text-2xl mb-2">
        Thursday, Jul 11
      </Text>
      <Text className="text-gray-600  text-sm mb-4">
        Here are your daily recommendations
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommendations.map((item) => (
          <View key={item.id} className="mr-4 w-60">
            <Image
              source={item.image}
              className="h-36 w-full rounded-xl mb-2"
              resizeMode="cover"
            />
            <Text className="font-medium text-sm text-gray-900 mb-1">
              {item.title}
            </Text>
            <Text className="text-xs text-gray-500">{item.category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text className="text-gray-900 font-clashBld text-2xl mt-8 mb-2">
        Ingredients
      </Text>
      <Text className="text-gray-600 text-sm mb-3">
        Gain expertise in active ingredients
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
      >
        {Array.from({
          length: Math.ceil(ingredients.length / 2),
        }).map((_, colIndex) => (
          <View
            key={`column-${colIndex}`}
            style={{
              marginHorizontal: 8,
              justifyContent: "space-between",
            }}
          >
            {ingredients
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((item, index) => (
                <TouchableOpacity
                  key={`item-${colIndex}-${index}`}
                  className={`flex-row items-center p-3 bg-gray-100 rounded-xl mb-2 w-[190px]`}
                >
                  <Image
                    source={item.image}
                    className="w-8 h-8 rounded-full mr-3"
                    resizeMode="cover"
                  />
                  <Text
                    className="text-sm font-clashMedium text-gray-800 font-medium"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </ScrollView>

      <Text className="text-gray-900 font-clashMedium text-2xl mt-8 mb-2">
        Skincare 101
      </Text>
      <Text className="text-gray-600 text-sm mb-3">
        Basic knowledge to embark on your skincare journey
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommendations.map((item) => (
          <View key={item.id} className="mr-4 w-60">
            <Image
              source={item.image}
              className="h-36 w-full rounded-xl mb-2"
              resizeMode="cover"
            />
            <Text className="font-medium text-sm text-gray-900 mb-1">
              {item.title}
            </Text>
            <Text className="text-xs text-gray-500">{item.category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text className="text-gray-900 font-clashMedium text-2xl mt-8 mb-2">
        New and noteworthy
      </Text>
      <Text className="text-gray-600 text-sm mb-3">
        Fresh content we've just prepared for you
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommendations.map((item) => (
          <View key={item.id} className="mr-4 w-60">
            <Image
              source={item.image}
              className="h-36 w-full rounded-xl mb-2"
              resizeMode="cover"
            />
            <Text className="font-medium text-sm text-gray-900 mb-1">
              {item.title}
            </Text>
            <Text className="text-xs text-gray-500">{item.category}</Text>
          </View>
        ))}
      </ScrollView>

      <View className="h-12" />
    </ScrollView>
  );
}
