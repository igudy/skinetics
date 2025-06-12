import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { CustomLabel } from "../utils/CustomLabel";
import { useNavigation } from "expo-router";
import ScanIcon from "../../assets/icons/scan.svg";

export default function Layout() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 0,
            height: 70,
            position: "relative",
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Homepage"
          options={{
            tabBarLabel: ({ focused }) => (
              <CustomLabel
                label="Home"
                focused={focused}
                style={focused ? styles.activeLabel : styles.inactiveLabel}
              />
            ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color="#000"
                style={focused ? styles.activeIcon : undefined}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Products"
          options={{
            tabBarLabel: ({ focused }) => (
              <CustomLabel
                label="Products"
                focused={focused}
                style={focused ? styles.activeLabel : styles.inactiveLabel}
              />
            ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="pricetag-outline"
                size={size}
                color="#000"
                style={focused ? styles.activeIcon : undefined}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Scan"
          options={{
            tabBarButton: () => (
              <View style={styles.scanButtonContainer}>
                <TouchableOpacity
                  onPress={() => router.push("/home/Scan")}
                  style={styles.scanButton}
                >
                  {/* <Image
                    // source={require("../../assets/icons/scan.svg")}
                    source={ScanIcon}
                    style={styles.scanImage}
                    resizeMode="contain"
                  /> */}
                  <ScanIcon width={25} height={25} fill="white" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Explore"
          options={{
            tabBarLabel: ({ focused }) => (
              <CustomLabel
                label="Explore"
                focused={focused}
                style={focused ? styles.activeLabel : styles.inactiveLabel}
              />
            ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="compass-outline"
                size={size}
                color="#000"
                style={focused ? styles.activeIcon : undefined}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarLabel: ({ focused }) => (
              <CustomLabel
                label="Profile"
                focused={focused}
                style={focused ? styles.activeLabel : styles.inactiveLabel}
              />
            ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color="#000"
                style={focused ? styles.activeIcon : undefined}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  activeLabel: {
    fontWeight: "bold",
  },
  inactiveLabel: {
    fontWeight: "normal",
  },
  activeIcon: {
    fontWeight: "bold",
  },
  scanButtonContainer: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: -30,
    zIndex: 10,
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    // elevation: 5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  scanImage: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
});
