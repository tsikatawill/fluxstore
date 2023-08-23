import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Container from "../components/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryRow from "../components/CategoryRow";
import CollectionCard from "../components/CollectionCard";
import FeatureProducts from "../components/FeatureProducts";
import HangoutPartyCollection from "../components/HangoutPartyCollection";
import FontsProvider from "../components/FontsProvider";
import Recommended from "../components/Recommended";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <FontsProvider>
        <View className="mt-7">
          <Container>
            <View className="flex-row justify-between gap-3">
              <TouchableOpacity>
                <Image
                  className="w-5 h-5"
                  source={require("../assets/hamburger.png")}
                />
              </TouchableOpacity>

              <Text className="font-bold text-xl ">Fluxstore</Text>

              <TouchableOpacity>
                <Image
                  className="w-5 h-5"
                  source={require("../assets/bell.png")}
                />
              </TouchableOpacity>
            </View>
          </Container>
        </View>

        <CategoryRow />

        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <CollectionCard />
          <FeatureProducts />
          <HangoutPartyCollection />
          <Recommended />
          {/* <View className="h-[100rem]">
            <Container>
              <Text className="text-xl font-bold mt-10">
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
                minima veritatis et totam perspiciatis. sit amet consectetur
              </Text>
            </Container>
          </View> */}
        </ScrollView>
      </FontsProvider>
    </SafeAreaView>
  );
};

export default HomeScreen;
