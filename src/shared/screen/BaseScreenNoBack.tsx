import styled from "@emotion/native";
import { Header } from "./Header";
import { QueryBoundaries } from "../utils/QueryBoundaries";

interface ScreenProps {
  children: React.ReactNode;
  title: string;
}

export const BaseScreenNoBack = ({ children, title }: ScreenProps) => {
  return (
    <Container>
      <Header title={title} />
      <QueryBoundaries>{children}</QueryBoundaries>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
