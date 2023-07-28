import { IEpisode, IShow } from "./fetchData";

type searchFilter<T> = (item: T) => boolean;

export function searchName(subStr: string): searchFilter<IEpisode | IShow> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const name = content.name.toLowerCase();

    return name.includes(searchStr);
  };
}

export function searchSummary(subStr: string): searchFilter<IEpisode | IShow> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const summary =
      content.summary === null ? "" : content.summary.toLowerCase();

    return summary.includes(searchStr);
  };
}

export function searchGenres(subStr: string): searchFilter<IShow> {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const genres = content.genres.map((g) => g.toLowerCase());

    return genres.some((g) => g.includes(searchStr));
  };
}

export function searchEpisodeId(id: string): searchFilter<IEpisode> {
  return (episode) => {
    if (id === "") {
      return true;
    }

    return parseInt(id) === episode.id;
  };
}

export function combineFilters<T>(...filters: searchFilter<T>[]) {
  return (searchTerm: T) =>
    filters
      .map((filter) => filter(searchTerm))
      .some((result) => result === true);
}
