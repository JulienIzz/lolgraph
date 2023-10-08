export type RawProfile = {
  profileIconId: number;
  summonerLevel: number;
  puuid: string;
};

export type Profile = {
  profileIconId: number;
  level: number;
  profileUniqueId: string;
};

export type ProfileInput = {
  summonerName: string;
  server: string;
};
