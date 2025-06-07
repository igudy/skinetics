import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const verifySchema = z.object({
  code1: z.string().min(1, "Required"),
  code2: z.string().min(1, "Required"),
  code3: z.string().min(1, "Required"),
  code4: z.string().min(1, "Required"),
});

type VerifyForm = z.infer<typeof verifySchema>;

export default function AutorizeAccount() {
  const { control, handleSubmit, setValue } = useForm<VerifyForm>({
    resolver: zodResolver(verifySchema),
  });

  const router = useRouter();

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onSubmit = (data: VerifyForm) => {
    console.log(data);
    router.push("/auth/signUp/accountCreated");
  };

  const handleChange = (text: string, index: number, onChange: any) => {
    onChange(text);
    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-10 left-4"
      >
        <Ionicons name="chevron-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-black text-2xl font-clashBold mb-2">
        Authorize Account
      </Text>
      <Text className="text-gray-500 text-base mb-6">
        We’ve sent a code to{" "}
        <Text className="font-clashMedium">helloworld@gmail.com</Text>
      </Text>

      {/* Code Inputs */}
      <View className="flex-row justify-between mb-8">
        {["code1", "code2", "code3", "code4"].map((field, index) => (
          <Controller
            key={field}
            control={control}
            name={field as keyof VerifyForm}
            render={({ field: { onChange, value } }) => (
              <TextInput
                ref={inputRefs[index]}
                className="border border-gray-400 rounded-lg w-14 h-14 text-center text-xl"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleChange(text, index, onChange)}
                value={value}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
              />
            )}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-black py-4 rounded-lg mb-6"
      >
        <Text className="text-white text-center font-clashBold text-base">
          Verify
        </Text>
      </TouchableOpacity>

      {/* Send code again */}
      <Text className="text-center text-gray-500">
        Send code again <Text className="font-bold">00:20</Text>
      </Text>
    </View>
  );
}
