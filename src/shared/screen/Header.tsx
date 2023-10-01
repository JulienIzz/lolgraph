import styled from "@emotion/native";
import { theme } from "../theme/theme";

interface Props {
  title: string;
  backButton?: boolean;
}

export const Header = ({ title, backButton }: Props) => {
  return (
    <Background>
      <TitleContainer>
        {backButton ? <BackButton /> : null}
        <Title>{title}</Title>
      </TitleContainer>
    </Background>
  );
};

const BackButton = () => {
  return (
    <BackButtonTouchable>
      <BackButtonImage
        source={require("../../../assets/utils/arrow_left.png")}
      />
    </BackButtonTouchable>
  );
};

const Background = styled.SafeAreaView({
  backgroundColor: theme.primary,
  width: "100%",
});

const TitleContainer = styled.View({
  width: "100%",
  height: 60,
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled.Text({
  fontWeight: "bold",
  fontSize: 20,
});

const BackButtonTouchable = styled.TouchableOpacity({
  height: 30,
  width: 30,
  position: "absolute",
  top: 15,
  left: 15,
});

const BackButtonImage = styled.Image({
  flex: 1,
  width: "100%",
  height: "100%",
});
