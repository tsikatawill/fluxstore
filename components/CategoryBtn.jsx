import { View, Text, TouchableOpacity, Image } from "react-native";

const CategoryBtn = ({ icon, activeIcon, onPress, category, active }) => {
  return (
    <>
      {active ? (
        <TouchableOpacity onPress={onPress}>
          <View className="space-y-2 items-center self-start">
            <View className="bg-[#3A2C27] text-white h-10 w-10 justify-center items-center rounded-full">
              {activeIcon}
            </View>
            <Text className="text-[#9d9d9d] font-bold text-sm">{category}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View className="space-y-2 items-center self-start">
            <View className="bg-[#f3f3f3] h-10 w-10 justify-center items-center rounded-full">
              {icon}
            </View>
            <Text className="text-[#9d9d9d] text-sm">{category}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CategoryBtn;
