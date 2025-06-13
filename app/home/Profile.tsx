import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  Sparkles,
  Droplets,
  CircleDashed,
  PaintBucket,
  Settings,
  Activity,
  Shield,
  ChevronRight,
  PenLine,
  SquareCheck,
  ChevronLeft,
  ShoppingBag,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("concerns");

  return (
    <ScrollView className="bg-gray-50 p-6" showsVerticalScrollIndicator={false}>
      <SafeAreaView>
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

        <View className="flex-row justify-between items-center mb-10">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row gap-5"
          >
            <Ionicons name="chevron-back-outline" size={24} color="#000" />
            <Text className="text-2xl font-clashBold text-gray-900">
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Settings size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center gap-2">
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <View>
              <Text className="text-xl font-clashMedium text-gray-900">
                Jessica Bren
              </Text>
              <Text className="text-gray-500 font-clashMedium">
                Premium Member
              </Text>
            </View>
          </View>

          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <PenLine size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Toggle Section */}
        <View className="flex-row bg-gray-100 rounded-full p-1 mb-8">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-full ${
              activeTab === "concerns" ? "bg-white" : ""
            }`}
            onPress={() => setActiveTab("concerns")}
          >
            <Text
              className={`text-center font-clashMedium ${
                activeTab === "concerns" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Concerns
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3 rounded-full ${
              activeTab === "goals" ? "bg-white" : ""
            }`}
            onPress={() => setActiveTab("goals")}
          >
            <Text
              className={`text-center font-clashMedium ${
                activeTab === "goals" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Goals
            </Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Content Card */}
        <View className="bg-white p-5 rounded-2xl mb-8">
          <Text className="text-xl font-clashBold text-gray-900 mb-4">
            {activeTab === "concerns" ? "Your Concerns" : "Your Goals"}
          </Text>

          <View className="flex-row justify-between items-center">
            <View className="space-y-3">
              {activeTab === "concerns" ? (
                <>
                  {["Acne", "Dark circles", "Pores"].map((concern, index) => (
                    <View
                      key={index}
                      className="flex-row items-center justify-between my-2"
                    >
                      <View className="flex-row items-center gap-2">
                        <SquareCheck color="#10b981" size={20} />
                        <Text className="text-gray-800 font-clashMedium">
                          {concern}
                        </Text>
                      </View>
                    </View>
                  ))}
                </>
              ) : (
                <>
                  {["Hydration", "Even tone", "Reduce redness"].map(
                    (goal, index) => (
                      <View
                        key={index}
                        className="flex-row items-center justify-between my-2"
                      >
                        <View className="flex-row items-center gap-2">
                          <SquareCheck color="#10b981" size={20} />
                          <Text className="text-gray-800 font-clashMedium">
                            {goal}
                          </Text>
                        </View>
                      </View>
                    )
                  )}
                </>
              )}
            </View>

            <Image
              source={require("../../assets/images/avatarSearch.png")}
              className="w-[100px]"
            />
          </View>
        </View>

        {/* Skin Analysis Card */}
        <View className="bg-white p-5 rounded-2xl mb-8">
          <Text className="text-xl font-clashBold text-gray-900 mb-4">
            Factors
          </Text>

          <View className="space-y-5">
            {[
              { icon: Sparkles, label: "Skin Type", value: "Combination" },
              { icon: Droplets, label: "Oiliness", value: "Normal" },
              { icon: CircleDashed, label: "Texture", value: "Smooth" },
              { icon: PaintBucket, label: "Tone", value: "Even" },
              { icon: Activity, label: "Elasticity", value: "Good" },
              { icon: Shield, label: "Sensitivity", value: "Sensitive" },
            ].map((factor, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between my-2"
              >
                <View className="flex-row items-center space-x-4">
                  <View className="p-2 bg-gray-50 rounded-full">
                    <factor.icon size={18} color="#4b5563" />
                  </View>
                  <View>
                    <Text className="font-clashMedium text-gray-800">
                      {factor.label}
                    </Text>
                    <Text className="text-xs text-gray-400 font-clashMedium capitalize">
                      {factor.label === "Skin Type"
                        ? "Skin characteristics"
                        : factor.label === "Oiliness"
                        ? "Sebum protection"
                        : factor.label === "Texture"
                        ? "Surface feel"
                        : factor.label === "Tone"
                        ? "Color consistency"
                        : factor.label === "Elasticity"
                        ? "Skin firmness"
                        : "Reactivity"}
                    </Text>
                  </View>
                </View>
                <Text className="font-clashMedium text-gray-700">
                  {factor.value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity className="bg-gray-400 p-4 rounded-2xl flex-row items-center justify-between mb-8">
          <View className="flex-row items-center gap-2">
            <Image
              source={require("../../assets/images/scanFace.png")}
              className="w-10 h-10 rounded-full border border-gray-200"
            />
            <View>
              <Text className="font-clashMedium text-xl text-gray-900">
                See Scan's Insights
              </Text>
            </View>
          </View>
          <ChevronRight size={20} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
