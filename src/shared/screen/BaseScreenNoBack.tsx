import styled from "@emotion/native";
import { Header } from "./Header";

interface ScreenProps {
  children: React.ReactNode;
  title: string;
}

export const BaseScreenNoBack = ({ children, title }: ScreenProps) => {
  return (
    <Container>
      <Header title={title} />
      {children}
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
