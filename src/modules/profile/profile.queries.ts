import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./profile.api";
import { ProfileInput } from "./profile.type";
import { expectQueryData } from "../../shared/utils/error";

export const useProfile = ({ summonerName, server }: ProfileInput) => {
  const { data: profile } = useQuery(["profile/" + summonerName], () =>
    getProfile({ summonerName, server }),
  );

  expectQueryData(profile);

  return { ...profile };
};
