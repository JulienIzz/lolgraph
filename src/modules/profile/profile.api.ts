import { apiKey } from "../../shared/api/key";
import { adaptProfile } from "./profile.adapter";
import { ProfileInput, RawProfile } from "./profile.type";

export async function getProfile({ summonerName, server }: ProfileInput) {
  const requestUrl =
    "https://" +
    server +
    ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    summonerName +
    "?api_key=" +
    apiKey;

  const response = await fetch(requestUrl);

  if (!response.ok && response.status.toString() === "404")
    throw new Error("No summoner found.");
  if (!response.ok) throw new Error(response.status.toString());

  const rawData: RawProfile = await response.json();

  return adaptProfile(rawData);
}
