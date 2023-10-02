import { render, screen } from "@testing-library/react-native";
import { Home } from "./Home.screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

jest.mock(
  "react-native-safe-area-context",
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  () => require("react-native-safe-area-context/jest/mock").default,
);

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({ navigate: jest.fn() }),
}));

test("home screen with title is correctly rendered", async () => {
  const expectedHeaderTextForTest = "MyLEAGUE";

  render(
    <SafeAreaProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaProvider>,
  );

  const HeaderOutput = screen.getByText(expectedHeaderTextForTest);

  expect(HeaderOutput).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
