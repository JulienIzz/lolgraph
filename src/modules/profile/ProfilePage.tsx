import { BaseScreenWithBack } from "../../shared/screen/BaseScreenWithBack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../app/navigation/Types";
import { useProfile } from "./profile.queries";
import styled from "@emotion/native";
import { Spacer } from "../../shared/screen/Spacer";
import { theme } from "../../shared/theme/theme";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDDragonVersion } from "../../shared/api/ddragon.queries";
import { QueryBoundaries } from "../../shared/utils/QueryBoundaries";

export type ProfileRouteProps = { userId: string; server: string };

type ProfileScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export const ProfilePage = ({ route }: ProfileScreenNavigationProp) => {
  return (
    <BaseScreenWithBack title={route.params.userId}>
      <ScreenWrapper>
        <QueryBoundaries>
          <ProfileBanner
            userId={route.params.userId}
            server={route.params.server}
          />
        </QueryBoundaries>
      </ScreenWrapper>
    </BaseScreenWithBack>
  );
};

const ProfileBanner = ({ userId, server }: ProfileRouteProps) => {
  const { profileIconId, level, profileUniqueId } = useProfile({
    summonerName: userId,
    server,
  });
  const dDragonVersion = useDDragonVersion();

  if (profileUniqueId === undefined) {
    return <NoSummonerFound />;
  }

  return (
    <Container>
      <ProfileIcon
        source={{
          uri:
            "https://ddragon.leagueoflegends.com/cdn/" +
            dDragonVersion +
            "/img/profileicon/" +
            profileIconId +
            ".png",
        }}
      />
      <Spacer vertical={20} />
      <PreText>Account level</PreText>
      <Spacer vertical={5} />
      <LevelText>{level}</LevelText>
    </Container>
  );
};

const NoSummonerFound = () => {
  const navigation = useNavigation();

  return (
    <ErrorContainer>
      <Text>No summoner found, please check input</Text>
      <Spacer vertical={20} />
      <BackButtonTouchable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </BackButtonTouchable>
    </ErrorContainer>
  );
};

const ProfileIcon = styled.Image({
  width: 120,
  height: 120,
  borderRadius: 120,
});

const Container = styled.View({
  width: "80%",
  alignItems: "center",
  backgroundColor: theme.primary,
  padding: 20,
  borderRadius: 20,
});

const ScreenWrapper = styled.View({
  flex: 1,
  alignItems: "center",
  paddingTop: "10%",
});

const LevelText = styled.Text({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 30,
});

const PreText = styled.Text({
  textAlign: "center",
});

const ErrorContainer = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

const BackButtonTouchable = styled.TouchableOpacity({
  backgroundColor: theme.primary,
  padding: 10,
  borderRadius: 5,
});
