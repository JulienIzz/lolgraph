import styled from "@emotion/native";
import { BaseScreenNoBack } from "../../shared/screen/BaseScreenNoBack";
import { HomeButton } from "./HomeButton";
import { useNavigation } from "@react-navigation/native";

export type HomeRouteProps = undefined;

export const Home = () => {
  const navigation = useNavigation();
  return (
    <BaseScreenNoBack title="MyLEAGUE">
      <Container>
        <HomeButton
          label="Profile"
          icon={require("../../../assets/utils/user.png")}
          onPress={() => navigation.navigate("ProfileInput")}
        />
        <HomeButton
          label="Timers"
          icon={require("../../../assets/utils/clock.png")}
          onPress={() => navigation.navigate("ProfileInput")}
        />
      </Container>
    </BaseScreenNoBack>
  );
};

const Container = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});
