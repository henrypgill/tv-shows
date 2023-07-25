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

export async function getEpisodes(): Promise<IEpisode[]> {
  const rawData = await fetch("https://api.tvmaze.com/shows/82/episodes");
  const episodeData: IEpisode[] = await rawData.json();

  return episodeData;
}
