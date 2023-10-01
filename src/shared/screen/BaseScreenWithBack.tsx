import styled from "@emotion/native";
import { Header } from "./Header";

interface ScreenProps {
  children: React.ReactNode;
  title: string;
}

export const BaseScreenWithBack = ({ children, title }: ScreenProps) => {
  return (
    <Container>
      <Header backButton title={title} />
      {children}
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
