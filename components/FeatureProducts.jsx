import { View, Text, ScrollView } from "react-native";
import Container from "./Container";
import { TouchableOpacity } from "react-native";
import FeatureProductCard from "./FeatureProductCard";
import CustomHeading from "./CustomHeading";

const FeatureProducts = () => {
  return (
    <View className="mt-9">
      <Container>
        <View className="flex-row items-center justify-between mb-5">
          <CustomHeading variant="sectionHeader">
            Feature Products
          </CustomHeading>

          <TouchableOpacity>
            <Text className="text-xs text-[#9b9b9b]">Show all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 6 }).map((_i, idx) => (
            <FeatureProductCard key={idx} />
          ))}
        </ScrollView>
      </Container>
    </View>
  );
};

export default FeatureProducts;
