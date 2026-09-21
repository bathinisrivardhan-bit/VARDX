import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-4xl font-bold text-white">VARDX</Text>
      <Text className="mt-2 text-sm text-gray-500">NativeWind is alive</Text>
    </View>
  );
}