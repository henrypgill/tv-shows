export interface IShow {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export async function getShows(pageNumber = 1): Promise<IShow[]> {
  const rawData = await fetch(
    `https://api.tvmaze.com/shows?page=${pageNumber}`
  );
  const showData: IShow[] = await rawData.json();

  return showData;
}
