import styled from "@emotion/native";
import { theme } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
  backButton?: boolean;
}

interface InsetProps {
  insets: EdgeInsets;
}

export const Header = ({ title, backButton }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Background insets={insets}>
      <TitleContainer>
        {backButton ? <BackButton /> : null}
        <Title>{title}</Title>
      </TitleContainer>
    </Background>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <BackButtonTouchable onPress={() => navigation.goBack()}>
      <BackButtonImage
        source={require("../../../assets/utils/arrow_left.png")}
      />
    </BackButtonTouchable>
  );
};

const Background = styled.View<InsetProps>(({ insets }) => ({
  paddingTop: insets.top,
  height: insets.top + 60,
  width: "100%",
  backgroundColor: theme.primary,
}));

const TitleContainer = styled.View({
  flex: 1,
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
  left: 15,
});

const BackButtonImage = styled.Image({
  flex: 1,
  width: "100%",
  height: "100%",
});
