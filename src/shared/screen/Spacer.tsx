import { View } from "react-native";

interface Props {
  vertical?: number;
  horizontal?: number;
}

export const Spacer = ({ vertical, horizontal }: Props) => {
  return <View style={{ height: vertical, width: horizontal }} />;
};
