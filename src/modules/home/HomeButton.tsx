import styled from "@emotion/native";
import { theme } from "../../shared/theme/theme";
import { ImageSourcePropType } from "react-native";

interface Props {
  label: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

export const HomeButton = ({ label, icon, onPress }: Props) => {
  return (
    <Touchable onPress={onPress}>
      <>
        <ImageContainer>
          <Icon source={icon} />
        </ImageContainer>
        <Label>{label}</Label>
      </>
    </Touchable>
  );
};
const Touchable = styled.TouchableOpacity({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 80,
  width: 220,
  margin: 10,
  backgroundColor: theme.primary,
  borderRadius: 6,
});
const ImageContainer = styled.View({
  justifyContent: "center",
  alignItems: "center",
  height: 30,
  width: 30,
  position: "absolute",
  left: 20,
});
const Icon = styled.Image({
  width: "100%",
  height: "100%",
  resizeMode: "cover",
});
const Label = styled.Text({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 16,
});
