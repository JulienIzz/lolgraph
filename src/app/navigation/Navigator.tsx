import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RootStackParamList } from "./Types";

import { Home } from "../../modules/home/Home.screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
