import { BaseScreenNoBack } from "../../shared/screen/BaseScreenNoBack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styled from "@emotion/native";
import { Spacer } from "../../shared/screen/Spacer";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { theme } from "../../shared/theme/theme";

export type HomeRouteProps = undefined;

export const Home = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState<string | null>();
  const [selectedServer, setSelectedServer] = useState<string | null>();

  return (
    <BaseScreenNoBack title="MyLEAGUE">
      <Container>
        <Spacer vertical={75} />
        <ProfileNameInput
          onChangeText={(input) => setInput(input)}
          placeholder="Summoner's name"
          placeholderTextColor={"gray"}
        />
        <Spacer vertical={12} />
        <Dropdown
          data={servers}
          labelField={"label"}
          valueField={"value"}
          onChange={(item) => setSelectedServer(item.value)}
          placeholder="Server"
          placeholderStyle={styles.dropdownPlaceholder}
          selectedTextStyle={styles.dropdownLabels}
          style={styles.dropdown}
        />
        <Spacer vertical={40} />
        <SearchButton
          onPress={() => {
            selectedServer && input
              ? navigation.navigate("Profile", {
                  userId: input,
                  server: selectedServer,
                })
              : null;
          }}
        >
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </Container>
    </BaseScreenNoBack>
  );
};

const ProfileNameInput = styled.TextInput({
  width: 250,
  height: 40,
  borderColor: "gray",
  borderRadius: 6,
  borderWidth: 1,
  textAlign: "center",
  fontSize: 16,
});

const SearchButton = styled.TouchableOpacity({
  height: 40,
  width: 250,
  backgroundColor: theme.primary,
  borderColor: "gray",
  borderRadius: 6,
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
});

const SearchButtonText = styled.Text({
  fontSize: 16,
  fontWeight: "bold",
});

const Container = styled.View({
  flex: 1,
  margin: 25,
  alignItems: "center",
});

const servers = [
  { label: "EUW", value: "EUW1" },
  { label: "NA", value: "NA1" },
];

const styles = StyleSheet.create({
  dropdown: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderRadius: 6,
    borderWidth: 1,
  },
  dropdownPlaceholder: { color: "gray", textAlign: "center" },
  dropdownLabels: { textAlign: "center" },
});
