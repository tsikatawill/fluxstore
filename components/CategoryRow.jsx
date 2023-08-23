import { View } from "react-native";
import React, { useState } from "react";
import Container from "./Container";
import CategoryBtn from "./CategoryBtn";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CategoryRow = () => {
  const [selectedCategory, setSelectedCategory] = useState("Women");

  const CATEGORIES = [
    {
      icon: <Foundation name="female-symbol" size={27} color="#9d9d9d" />,
      activeIcon: <Foundation name="female-symbol" size={27} color="white" />,
      category: "Women",
    },
    {
      icon: <Foundation name="male-symbol" size={27} color="#9d9d9d" />,
      activeIcon: <Foundation name="male-symbol" size={27} color="white" />,
      category: "Men",
    },
    {
      icon: <FontAwesome name="glasses" size={22} color="#9d9d9d" />,
      activeIcon: <FontAwesome name="glasses" size={22} color="white" />,
      category: "Accessories",
    },
    {
      icon: <MaterialCommunityIcons name="mirror" size={27} color="#9d9d9d" />,
      activeIcon: (
        <MaterialCommunityIcons name="mirror" size={27} color="white" />
      ),
      category: "Beauty",
    },
  ];
  return (
    <View className="mt-9 mb-5">
      <Container>
        <View className="flex-row justify-between">
          {CATEGORIES.map((item, idx) => (
            <CategoryBtn
              key={idx}
              onPress={() => setSelectedCategory(item.category)}
              icon={item.icon}
              activeIcon={item.activeIcon}
              category={item.category}
              active={selectedCategory === item.category}
            />
          ))}
        </View>
      </Container>
    </View>
  );
};

export default CategoryRow;
