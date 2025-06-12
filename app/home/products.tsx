import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  Lock,
  ChevronLeft,
  Heart,
  ShoppingBag,
  ShoppingBagIcon,
} from "lucide-react-native";
import { products } from "../data";
import { useRouter } from "expo-router";

const categories = ["All", "Lotion", "Toner", "Serum", "Cream", "Mask"];

const Products = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("All");
  const [wishlist, setWishlist] = useState<any>([]);

  const toggleWishlist = (id: any) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item: any) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filtered =
    selected === "All"
      ? products
      : products.filter((item) => item.type.includes(selected));

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white pt-12 px-6 pb-4 shadow-sm">
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <ChevronLeft size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-clashMedium text-gray-900">
            Our Products
          </Text>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <ShoppingBag size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-2"
          contentContainerStyle={{ paddingHorizontal: 2 }}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full mx-1 ${
                selected === cat
                  ? "bg-black border border-black"
                  : "bg-white border border-gray-200"
              }`}
            >
              <Text
                className={`text-sm w-[100px] text-center ${
                  selected === cat ? "text-white" : "text-gray-700"
                } font-medium`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Product Grid */}
      <ScrollView
        className="flex-1 p-3 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between gap-x-3">
          {filtered.map((product: any) => (
            <TouchableOpacity
              onPress={() => router.push(`/product/${product.id}`)}
              key={product.id}
              className="w-[30%] my-2 bg-white rounded-2xl p-3 mb-5 shadow-xs"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <View className="relative">
                <Image
                  source={product.image}
                  className="w-full h-28 rounded-xl mb-3"
                  resizeMode="cover"
                />
                <TouchableOpacity
                  className="absolute top-2 right-2 p-2 bg-white rounded-full"
                  onPress={() => toggleWishlist(product.id)}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 1,
                  }}
                >
                  <Heart
                    size={18}
                    color={wishlist.includes(product.id) ? "red" : "gray"}
                    fill={wishlist.includes(product.id) ? "red" : "none"}
                  />
                </TouchableOpacity>
              </View>

              <Text className="text-gray-900 h-[30px] font-clashMedium text-sm mb-1">
                {product.name}
              </Text>
              <Text className="text-gray-500 font-clashMedium text-xs mb-2">
                {product.type}
              </Text>

              <View className="flex-row items-center justify-between mt-1">
                <View>
                  <Text className="text-gray-900 font-clashMedium text-sm">
                    ${product.price}
                  </Text>
                  <View className="flex-row items-center mt-0.5">
                    <Text className="text-amber-500 text-xs font-clashMedium mr-1">
                      ★ {product.rating}
                    </Text>
                    <Text className="text-gray-400 font-clashMedium text-xs">
                      (128)
                    </Text>
                  </View>
                </View>
                <TouchableOpacity className="p-1.5 bg-gray-100 rounded-full">
                  <ShoppingBagIcon size={16} color="gray" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Products;
