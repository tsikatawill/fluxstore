// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const ICONMAPPINGS = {
    Home: "ios-home",
    Discover: "ios-search",
    Orders: "ios-basket",
    "My profile": "ios-person",
  };
  const OUTLINEICONMAPPINGS = {
    Home: "ios-home-outline",
    Discover: "ios-search",
    Orders: "ios-basket-outline",
    "My profile": "ios-person-outline",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? ICONMAPPINGS[route.name]
              : OUTLINEICONMAPPINGS[route.name];

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3A2C27",
          tabBarInactiveTintColor: "#ccc",
        })}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="My profile"
          component={MyProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
