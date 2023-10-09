import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "./Types";

import { ProfileInput } from "../../modules/profile/ProfileInput";
import { ProfilePage } from "../../modules/profile/ProfilePage";
import { Home } from "../../modules/home/Home";

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
            <Stack.Screen name="ProfileInput" component={ProfileInput} />
            <Stack.Screen name="Profile" component={ProfilePage} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
