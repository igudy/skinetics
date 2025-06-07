import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Schema
const schema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Reset form data:", data);
    // Reset password logic
    router.push("/auth/passwordChanged");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      {/* Back button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-10 left-4"
      >
        <Ionicons name="chevron-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-2xl font-clashBold mb-6">Reset Password</Text>

      {/* Password */}
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

      {/* Confirm Password */}
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
              secureTextEntry={!showPassword}
            />
          )}
        />
      </View>
      {errors.confirmPassword && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.confirmPassword.message}
        </Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashBold text-base">
          Reset Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
