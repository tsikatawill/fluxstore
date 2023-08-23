import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../components/Container";
import CustomHeading from "../components/CustomHeading";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <CustomHeading>Settings Screen</CustomHeading>
      </Container>
    </SafeAreaView>
  );
};

export default SettingsScreen;
