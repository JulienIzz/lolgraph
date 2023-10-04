import { useQuery } from "@tanstack/react-query";
import { getDataDragonLastVersion } from "./ddragon.api";
import { expectQueryData } from "../utils/error";

export const useDDragonVersion = () => {
  const { data: version } = useQuery(["version"], () =>
    getDataDragonLastVersion(),
  );

  expectQueryData(version);

  return version;
};
