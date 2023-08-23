import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import RecommendedProductCard from "./RecommendedProductCard";
import Container from "./Container";
import CustomHeading from "./CustomHeading";

const Recommended = () => {
  return (
    <View className="mt-9">
      <Container>
        <View className="flex-row items-center justify-between mb-5">
          <CustomHeading variant="sectionHeader">
            Recommended Products
          </CustomHeading>

          <TouchableOpacity>
            <Text className="text-xs text-[#9b9b9b]">Show all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 6 }).map((i, idx) => (
            <RecommendedProductCard key={idx} />
          ))}
        </ScrollView>
      </Container>
    </View>
  );
};

export default Recommended;
