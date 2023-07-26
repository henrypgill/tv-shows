export interface IEpisode {
  id: number;
  // url: string;
  name: string;
  season: number;
  number: number;
  // type: string;
  // airdate: string;
  // airtime: string;
  // airstamp: string;
  // rating: { average: number };
  // runtime: number;
  image: {
    medium: string;
    // original: string;
  };
  summary: string;
  // _links: { self: { href: string } };
}

export async function getEpisodes(showCode: string): Promise<IEpisode[]> {
  const rawData = await fetch(
    `https://api.tvmaze.com/shows/${showCode}/episodes`
  );
  const episodeData: IEpisode[] = await rawData.json();

  return episodeData;
}
