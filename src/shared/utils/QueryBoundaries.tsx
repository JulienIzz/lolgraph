import styled from "@emotion/native";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ActivityIndicator, Text } from "react-native";
import { theme } from "../theme/theme";
import { Spacer } from "../screen/Spacer";

interface Props {
  children: React.ReactNode;
  LoadingView?: React.ReactNode;
  ErrorView?: React.FC<FallbackProps>;
}

// MakeFetchingEasy
export const QueryBoundaries = ({
  children,
  LoadingView,
  ErrorView,
}: Props) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        FallbackComponent={ErrorView ?? StandardErrorView}
      >
        <React.Suspense fallback={LoadingView ?? <StandardLoadingView />}>
          {children}
        </React.Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

// Error + retry
const StandardErrorView = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <CenterWrapper>
      <Text>{error.message}</Text>
      <Spacer vertical={20} />
      <BackButtonTouchable onPress={resetErrorBoundary}>
        <Text>Retry</Text>
      </BackButtonTouchable>
    </CenterWrapper>
  );
};

const StandardLoadingView = () => {
  return (
    <CenterWrapper>
      <ActivityIndicator />
    </CenterWrapper>
  );
};

const CenterWrapper = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

const BackButtonTouchable = styled.TouchableOpacity({
  backgroundColor: theme.primary,
  padding: 10,
  borderRadius: 5,
});
