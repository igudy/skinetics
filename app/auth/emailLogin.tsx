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
  const [showPassword, setShowPassword] = useState(false);
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
    router.push("/auth/forgotPassword");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      {/* Header */}
      <Text className="text-2xl font-clashBold mb-6">Log in</Text>

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

      {/* Password Field */}
      <Text className="text-base mt-4 mb-1 font-clashMedium">Password</Text>
      <View
        className={`flex-row items-center border rounded-lg px-4 ${
          errors.password ? "border-red-500" : "border-gray-300"
        }`}
      >
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="flex-1 py-3 text-base"
              placeholder="Enter password"
              onChangeText={onChange}
              value={value}
              secureTextEntry={!showPassword}
            />
          )}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.password.message}
        </Text>
      )}

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text className="text-sm text-gray-500 mt-2 self-end">
          Forgot password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashBold text-base">
          Log in
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center my-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="text-gray-500 px-4">Or Login with</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Buttons */}
      <View className="flex-row justify-between">
        {["logo-facebook", "logo-google", "logo-apple"].map((icon, idx) => (
          <TouchableOpacity
            key={idx}
            className="flex-1 border border-gray-300 rounded-lg p-4 items-center mx-1"
          >
            <Ionicons name={icon as any} size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
