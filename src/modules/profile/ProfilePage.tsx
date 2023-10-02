import { View } from "react-native";
import { BaseScreenWithBack } from "../../shared/screen/BaseScreenWithBack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../app/navigation/Types";

export type ProfileRouteProps = { userId: string; server: string };

type ProfileScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export const ProfilePage = ({ route }: ProfileScreenNavigationProp) => {
  return (
    <BaseScreenWithBack title={route.params.userId + route.params.server}>
      <View />
    </BaseScreenWithBack>
  );
};
