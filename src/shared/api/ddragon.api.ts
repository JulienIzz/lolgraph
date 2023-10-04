export async function getDataDragonLastVersion() {
  const rawVersions = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );

  const versions: string[] = await rawVersions.json();

  return versions[0];
}
