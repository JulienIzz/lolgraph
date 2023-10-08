import styled from "@emotion/native";
import { Header } from "./Header";
import { QueryBoundaries } from "../utils/QueryBoundaries";

interface ScreenProps {
  children: React.ReactNode;
  title: string;
}

export const BaseScreenWithBack = ({ children, title }: ScreenProps) => {
  return (
    <Container>
      <Header backButton title={title} />
      <QueryBoundaries>{children}</QueryBoundaries>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
