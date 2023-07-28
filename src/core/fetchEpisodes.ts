export interface IEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
  };
  summary: string;
}

export async function getEpisodes(showCode: string): Promise<IEpisode[]> {
  if (showCode === "") {
    return [];
  }

  const rawData = await fetch(
    `https://api.tvmaze.com/shows/${showCode}/episodes`
  );
  const episodeData: IEpisode[] = await rawData.json();

  return episodeData;
}
