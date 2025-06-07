import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function ForgotPassword() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Login form data:", data);
    router.push("/auth/verifyToken");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      {/* Header */}
      <Text className="text-2xl font-clashBold mb-6">Forgot Password</Text>

      {/* Email Field */}
      <Text className="text-base mb-1 font-clashMedium">Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className={`border rounded-lg px-4 py-3 text-base ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter email"
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.email.message}
        </Text>
      )}

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashBold text-base">
          Send Code
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center my-12">
        <Text className="mt-6 text-gray-600 font-clashMedium">
          Remember Password?{" "}
          <Text
            className="text-black font-clashBold underline"
            onPress={() => router.push("/auth/login")}
          >
            Login
          </Text>
        </Text>
      </View>

      {/* Social Buttons */}
    </View>
  );
}
