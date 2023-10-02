import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RootStackParamList } from "./Types";

import { Home } from "../../modules/home/Home.screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilePage } from "../../modules/profile/ProfilePage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const Navigator = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={ProfilePage} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
