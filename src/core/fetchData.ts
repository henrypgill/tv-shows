export interface IShow {
  id: number;
  // url: string;
  name: string;
  // type: string;
  // language: string;
  genres: string[];
  status: string;
  runtime: number;
  // averageRuntime: number;
  // premiered: string;
  // ended: string;
  // officialSite: string | null;
  // schedule: {
  //   time: string;
  //   days: string[];
  // };
  rating: {
    average: number | null;
  };
  // weight: number;
  // network: {
  //   id: number;
  //   name: string;
  //   country: {
  //     name: string;
  //     code: string;
  //     timezone: string;
  //   };
  //   officialSite: string | null;
  // };
  // webChannel: {
  //   id: number;
  //   name: string;
  //   country: {
  //     name: string;
  //     code: string;
  //     timezone: string;
  //   };
  //   officialSite: string | null;
  // };
  // dvdCountry: string | null;
  // externals: {
  //   tvrage: number;
  //   thetvdb: number;
  //   imdb: string;
  // };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  // updated: number;
  // _links: {
  //   self: { href: string };
  //   previousepisode: { href: string };
  // };
}

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

/**
 *
 * @param pageNumber the page number of the shows being displayed from the api
 * @returns an array of IShow objects
 */
export async function getShows(pageNumber = 1): Promise<IShow[]> {
  const rawData = await fetch(
    `https://api.tvmaze.com/shows?page=${pageNumber}`
  );
  const showData: IShow[] = await rawData.json();

  return showData;
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

export function cacheFetch<T, U>(fetchFn: (v: T) => U) {
  const lookup = new Map<T, U>();

  return async (showCode: T) => {
    if (lookup.has(showCode)) {
      return lookup.get(showCode) as U;
    }

    const episodeData = await fetchFn(showCode);
    lookup.set(showCode, episodeData);

    return episodeData;
  };
}
