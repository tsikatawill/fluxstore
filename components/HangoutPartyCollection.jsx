import { View, Text, Image } from "react-native";
import Container from "./Container";

const HangoutPartyCollection = () => {
  return (
    <View className="mt-5 bg-[#f8f8fa]] min-h-[100px]">
      <Container>
        <View className="flex-row items-center">
          <View className="flex-1 justify-center items-center">
            <View className="space-y-5">
              <Text className="text-[#777E90] text-xs border-l-2 border-[#777E90] pl-5">
                NEW COLLECTION
              </Text>

              <Text className="text-xl max-w-[100px]">HANG OUT & PARTY</Text>
            </View>
          </View>

          <View className="h-[158px] flex-1 relative">
            <View className="circle-bg mx-auto h-[132px] w-[132px] justify-center items-center opacity-50 bg-[#e2e2e2] rounded-full">
              <View className="circle-bg h-[102px] w-[102px] bg-[#e2e2e2]  rounded-full"></View>
            </View>

            <View className="absolute w-full">
              <Image
                width={119}
                height={158}
                className="mx-auto"
                source={require("../assets/hangout-lady.png")}
              />
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default HangoutPartyCollection;
