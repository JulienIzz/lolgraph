import { Profile, RawProfile } from "./profile.type";

export const adaptProfile = (rawProfile: RawProfile): Profile => {
  return {
    profileIconId: rawProfile.profileIconId,
    level: rawProfile.summonerLevel,
    profileUniqueId: rawProfile.puuid,
  };
};
