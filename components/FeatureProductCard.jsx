import { View, Text, Image, TouchableOpacity } from "react-native";

const FeatureProductCard = () => {
  return (
    <TouchableOpacity className="w-[126px] mr-5">
      <View className="h-[172px] w-full rounded-lg overflow-hidden">
        <Image
          className="h-[192px] w-full"
          source={require("../assets/featured-1.jpg")}
        />
      </View>

      <View className="space-y-1 mt-[14px]">
        <Text className="text-xs">Long Sleeve Dress</Text>
        <Text className="font-bold">$ 45.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureProductCard;
