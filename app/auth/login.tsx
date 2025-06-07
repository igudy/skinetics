import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const { height } = Dimensions.get("window");
const HALF_HEIGHT = height / 2;

export default function Login() {
  const router = useRouter();

  const handleAppleLogin = () => {
    Toast.show({
      type: "success",
      text1: "Apple Login",
      text2: "Apple login clicked👌",
    });
  };

  const handleEmailLogin = () => {
    // Toast.show({
    //   type: "info",
    //   text1: "Email Login",
    //   text2: "Email login clicked📧",
    // });
    router.push("/auth/emailLogin");
  };

  const handleGoogleLogin = () => {
    Toast.show({
      type: "success",
      text1: "Google Login",
      text2: "Google login clicked🔍",
    });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View style={{ height: HALF_HEIGHT, width: "100%" }}>
        <Image
          source={require("../../assets/images/glow.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Content */}
      <View className="px-6 mt-6 items-center">
        <Text className="text-lg text-black font-clashMedium">
          Your skin journey starts here!
        </Text>

        {/* Apple Login */}
        <TouchableOpacity
          onPress={handleAppleLogin}
          className="flex-row items-center bg-black rounded-full py-3 px-6 mt-6 w-full"
        >
          <Ionicons name="logo-apple" size={20} color="white" />
          <Text className="text-white text-base font-clashMedium ml-3">
            Log in with Apple
          </Text>
        </TouchableOpacity>

        {/* Email Login */}
        <TouchableOpacity
          onPress={handleEmailLogin}
          className="flex-row items-center bg-white border border-gray-300 rounded-full py-3 px-6 mt-4 w-full"
        >
          <Ionicons name="mail-outline" size={20} color="black" />
          <Text className="text-black text-base font-clashMedium ml-3">
            Log in with Email
          </Text>
        </TouchableOpacity>

        {/* Google Login */}
        <TouchableOpacity
          onPress={handleGoogleLogin}
          className="flex-row items-center bg-white border border-gray-300 rounded-full py-3 px-6 mt-4 w-full"
        >
          <FontAwesome name="google" size={20} color="black" />
          <Text className="text-black text-base font-clashMedium ml-3">
            Log in with Google
          </Text>
        </TouchableOpacity>

        {/* Create account */}
        <Text className="mt-6 text-gray-600">
          Or{" "}
          <Text
            className="text-black font-clashMedium underline"
            onPress={() => router.push("/auth/register")}
          >
            Create new account
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
