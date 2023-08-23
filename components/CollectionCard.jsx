import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Container from "./Container";

const CollectionCard = () => {
  return (
    <Container>
      <TouchableOpacity className="rounded-2xl h-[168px] overflow-hidden relative mt-4">
        <Image
          // className="w-[320px] h-[209px]"
          className="w-full h-[209px]"
          source={require("../assets/collection.jpg")}
        />

        <View className="absolute right-5 top-[10px]">
          <Text className="font-bold text-2xl text-white">Autumn</Text>
          <Text className="font-bold text-2xl text-white">Collection</Text>
          <Text className="font-bold text-2xl text-white">2022</Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default CollectionCard;
