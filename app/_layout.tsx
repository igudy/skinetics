import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import Toast from "react-native-toast-message";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ClashDisplayBold: require("../assets/fonts/ClashDisplay-Bold.otf"),
    ClashDisplayExtralight: require("../assets/fonts/ClashDisplay-Extralight.otf"),
    ClashDisplayLight: require("../assets/fonts/ClashDisplay-Light.otf"),
    ClashDisplayMedium: require("../assets/fonts/ClashDisplay-Medium.otf"),
    ClashDisplayRegular: require("../assets/fonts/ClashDisplay-Regular.otf"),
    ClashDisplaySemibold: require("../assets/fonts/ClashDisplay-Semibold.otf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <Toast />
    </ThemeProvider>
  );
}
