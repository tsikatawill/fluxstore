import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomText from "./CustomText";

const RecommendedProductCard = () => {
  return (
    <TouchableOpacity className="flex-row gap-2 items-center w-[213px] border border-slate-100 mr-5">
      <View className="rounded-lg overflow-hidden bg-slate-200 h-[66px] w-[66px]">
        <Image
          source={require("../assets/featured-3.jpg")}
          width={66}
          height={66}
        />
      </View>

      <View className="space-y-[2px]">
        <CustomText>White fashion hoodie.</CustomText>
        <Text className="font-bold">$ 29.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedProductCard;
