import { render, screen } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./Home";

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
  const expectedProfileButton = "Profile";
  const expectedTimersButton = "Timers";

  render(
    <SafeAreaProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaProvider>,
  );

  const HeaderOutput = screen.getByText(expectedHeaderTextForTest);
  const ProfileButtonOutput = screen.getByText(expectedProfileButton);
  const TimersButtonOutput = screen.getByText(expectedTimersButton);

  expect(HeaderOutput).toBeTruthy();
  expect(ProfileButtonOutput).toBeTruthy();
  expect(TimersButtonOutput).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
