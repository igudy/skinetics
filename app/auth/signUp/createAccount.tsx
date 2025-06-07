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

const schema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Sign up form data:", data);
    router.push("/auth/signUp/authorizeAccount");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      {/* Header */}
      <Text className="text-2xl font-clashBold mb-6">Create Account</Text>

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

      {/* Confirm Password Field */}
      <Text className="text-base mt-4 mb-1 font-clashMedium">
        Confirm Password
      </Text>
      <View
        className={`flex-row items-center border rounded-lg px-4 ${
          errors.confirmPassword ? "border-red-500" : "border-gray-300"
        }`}
      >
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="flex-1 py-3 text-base"
              placeholder="Confirm password"
              onChangeText={onChange}
              value={value}
              secureTextEntry={!showConfirmPassword}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.confirmPassword && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.confirmPassword.message}
        </Text>
      )}

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashBold text-base">
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text className="mt-6 text-gray-600">
        By creating an account, you agree to our{" "}
        <Text
          className="text-black font-clashMedium underline"
          onPress={() => router.push("/auth/register")}
        >
          Terms and Conditions
        </Text>
      </Text>
    </View>
  );
}
