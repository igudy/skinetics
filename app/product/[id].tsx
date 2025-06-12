import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  LayoutAnimation,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Heart,
  ChevronLeft,
  Share2,
  Star,
  ChevronDown,
  ShoppingBag,
} from "lucide-react-native";
import { useState, useRef } from "react";
import { products } from "../data";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("60 ml");
  const [isFavorite, setIsFavorite] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showDetails, setShowDetails] = useState(false);

  const product = products.find((item) => item.id === Number(id));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const toggleDetails = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowDetails(!showDetails);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row pt-12 px-6 items-center justify-between pb-2">
        <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
          <ChevronLeft size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-clashMedium text-gray-900">
          Product Details
        </Text>
        <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            className=""
          >
            <Heart
              size={24}
              color={isFavorite ? "#ef4444" : "#9ca3af"}
              fill={isFavorite ? "#ef4444" : "none"}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      {/* Floating Header */}
      <Animated.View
        className="absolute top-0 left-0 right-0 z-10 bg-white px-6 pt-12 pb-4 flex-row justify-between items-center"
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-60, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold" numberOfLines={1}>
          {product.name}
        </Text>
        <View className="w-8" />
      </Animated.View>

      <ScrollView
        className="flex-1"
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => {
          if (nativeEvent.contentOffset.y > 50) {
            fadeIn();
          } else {
            fadeOut();
          }
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white items-center">
          <Image
            source={product.image}
            className="w-full h-full rounded-b-3xl"
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View className="bg-white rounded-t-3xl -mt-6 px-6 pt-8 pb-6">
          <View className="flex-row justify-between mt-2 items-start mb-2">
            <View className="flex-col">
              <Text className="text-3xl font-clashBold text-gray-900">
                {product.name}
              </Text>
              <Text className="text-gray-500 text-sm font-clashMedium">
                {product.type}
              </Text>
            </View>

            <TouchableOpacity className="p-3 bg-gray-100 rounded-full">
              <Share2 size={20} color="#4b5563" />
            </TouchableOpacity>
          </View>

          {/* Rating */}
          <View className="flex-row items-center mb-4">
            <View className="flex-row items-center mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  color={i <= 4 ? "#f59e0b" : "#d1d5db"}
                  fill={i <= 4 ? "#f59e0b" : "none"}
                />
              ))}
            </View>
            <Text className="text-gray-500 text-sm">4.8 (128 reviews)</Text>
          </View>

          <View className="flex-row items-center gap-2 mb-6">
            <Text className="text-4xl font-clashBold text-gray-900 mb-6">
              ${product.price}.00
            </Text>
            <Text className="text-gray-400 line-through text-base font-clashMedium mb-6">
              ${product.price}.00
            </Text>
          </View>

          {/* Description */}
          <View className="mb-8">
            <Text className="text-gray-900 font-clashMedium mb-2">
              Description
            </Text>
            <Text className="text-gray-600 text-md font-clashMedium leading-6">
              {
                //   product.description ||
                "Premium quality skincare formulated with natural ingredients to nourish and protect your skin. Suitable for all skin types."
              }
            </Text>
          </View>

          {/* Size Selector */}
          {/* <View className="mb-8">
            <Text className="text-gray-900 font-clashMedium mb-3">
              Select size
            </Text>
            <View className="flex-row gap-3">
              {["20 ml", "60 ml"].map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`p-4 py-3 rounded-xl border-2 ${
                    selectedSize === size
                      ? "border-black bg-gray-100"
                      : "border-gray-200"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      selectedSize === size ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View> */}

          {/* Details Accordion */}
          <View className="mb-4">
            <TouchableOpacity
              className="flex-row justify-between items-center py-4 border-t border-gray-100"
              onPress={toggleDetails}
            >
              <Text className="text-gray-900 font-clashMedium">Know More</Text>
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate: showDetails ? "180deg" : "0deg",
                    },
                  ],
                }}
              >
                <ChevronDown size={20} color="#6b7280" />
              </Animated.View>
            </TouchableOpacity>

            {showDetails && (
              <View className="pb-4">
                <Text className="text-gray-600 text-md font-clashMedium leading-6 mb-3">
                  • Formulated with 98% natural ingredients
                </Text>
                <Text className="text-gray-600 text-md font-clashMedium leading-6 mb-3">
                  • Cruelty-free and vegan
                </Text>
                <Text className="text-gray-600 text-md font-clashMedium leading-6 mb-3">
                  • Suitable for all skin types
                </Text>
                <Text className="text-gray-600 text-md font-clashMedium leading-6">
                  • Dermatologist tested
                </Text>
              </View>
            )}
          </View>

          <View
          // className="flex-row justify-between items-center"
          // style={{ transform: [{ translateY: buttonTranslate }] }}
          >
            <TouchableOpacity
              className="w-full bg-black rounded-full py-4"
              //   onPress={animateButton}
            >
              <Text className="text-white text-center font-semibold text-base">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
