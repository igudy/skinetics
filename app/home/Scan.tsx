import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import { Smile, Droplet, Sun, Camera, ChevronLeft } from "lucide-react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const { height } = Dimensions.get("window");

const Scan = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef: any = useRef(null);

  const handleGetStarted = async () => {
    if (!permission?.granted) {
      await requestPermission();
    }
    setShowCamera(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      setShowCamera(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <ChevronLeft size={22} color="black" />
        <Text className="ml-2 text-2xl font-clashBold text-black">
          Scan your face
        </Text>
      </View>

      {/* Camera Modal */}
      <Modal visible={showCamera} animationType="slide">
        <View style={styles.cameraContainer}>
          <CameraView ref={cameraRef} style={styles.camera} facing="front" />
          <View style={styles.cameraButtons}>
            <TouchableOpacity
              onPress={() => setShowCamera(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePicture}
              style={styles.captureButton}
            />
          </View>
        </View>
      </Modal>

      {/* Center Part */}
      <View
        style={{ minHeight: height * 0.75 }}
        className="justify-center items-center space-y-6"
      >
        {capturedImage ? (
          <>
            <Text className="text-center text-gray-700 text-3xl mb-5 font-clashMedium">
              Here's your scan!
            </Text>
            <Image
              source={{ uri: capturedImage }}
              style={styles.capturedImage}
              resizeMode="contain"
            />
            <TouchableOpacity
              onPress={() => setShowCamera(true)}
              className="bg-black py-3 rounded-full mt-5 w-full"
            >
              <Text className="text-white text-center font-medium">
                Retake Photo
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text className="text-center text-gray-700 text-3xl mb-5 font-clashMedium">
              One click away from personalized{"\n"}skincare insights
            </Text>

            {/* Instruction Box */}
            <View className="bg-gray-100 rounded-xl px-6 py-4 space-y-4 w-full">
              <Text className="text-center font-clashMedium text-black text-base">
                Snap, Scan, Transform!
              </Text>

              {/* Tip Items */}
              {[
                { icon: Smile, label: "Relax your face." },
                { icon: Droplet, label: "Do not apply any products" },
                { icon: Sun, label: "Sit in a good lighting" },
                { icon: Camera, label: "Stay still for a few seconds." },
              ].map((item, idx) => (
                <View key={idx} className="flex-row items-center gap-2">
                  <View className="my-2 bg-black p-2 rounded-lg">
                    <item.icon size={20} color="white" />
                  </View>
                  <Text className="text-black">{item.label}</Text>
                </View>
              ))}
            </View>

            {/* CTA Button */}
            <TouchableOpacity
              onPress={handleGetStarted}
              className="bg-black py-3 rounded-full mt-5 w-full"
            >
              <Text className="text-white text-center font-medium">
                Get started
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  cameraButtons: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "rgba(0,0,0,0.3)",
  },
  closeButton: {
    position: "absolute",
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 20,
  },
  capturedImage: {
    width: 300,
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default Scan;
