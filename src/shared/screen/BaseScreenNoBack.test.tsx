import { render, screen } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BaseScreenNoBack } from "./BaseScreenNoBack";
import { View } from "react-native";

jest.mock(
  "react-native-safe-area-context",
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  () => require("react-native-safe-area-context/jest/mock").default,
);

test("home screen with title is correctly rendered", async () => {
  const expectedHeaderTextForTest = "ScreenTitle";

  render(
    <SafeAreaProvider>
      <BaseScreenNoBack title={expectedHeaderTextForTest}>
        <View />
      </BaseScreenNoBack>
    </SafeAreaProvider>,
  );

  const HeaderOutput = screen.getByText(expectedHeaderTextForTest);

  expect(HeaderOutput).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
