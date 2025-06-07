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

export default function PasswordChanged() {
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
    router.push("/auth/emailLogin");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 pt-16">
      <Text className="text-2xl font-clashBold text-center mb-6">
        Password Changed!
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mt-6"
      >
        <Text className="text-white text-center font-clashMedium text-base">
          Back to login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
