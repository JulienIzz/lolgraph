import { HomeRouteProps } from "../../modules/home/Home.screen";
import { ProfileRouteProps } from "../../modules/profile/ProfilePage";

export type RootStackParamList = {
  Home: HomeRouteProps;
  Profile: ProfileRouteProps;
};

export type Routes = keyof RootStackParamList;

// Automatically type `useNavigation`, `ref`, `linking`, etc.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
