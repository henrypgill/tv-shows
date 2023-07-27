import { IEpisode } from "./fetchEpisodes";
import { IShow } from "./fetchShows";

export function searchName(
  subStr: string
): (content: IEpisode | IShow) => boolean {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const name = content.name.toLowerCase();

    return name.includes(searchStr);
  };
}

export function searchSummary(
  subStr: string
): (content: IEpisode | IShow) => boolean {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const summary =
      content.summary === null ? "" : content.summary.toLowerCase();

    return summary.includes(searchStr);
  };
}

export function searchGenres(subStr: string): (content: IShow) => boolean {
  return (content) => {
    const searchStr = subStr.toLowerCase();
    const genres = content.genres.map((g) => g.toLowerCase());

    return genres.some((g) => g.includes(searchStr));
  };
}

export function searchEpisodeId(id: string): (episode: IEpisode) => boolean {
  return (episode) => {
    if (id === "") {
      return true;
    }

    return parseInt(id) === episode.id;
  };
}

export function combineFilters<T>(...filters: { (item: T): boolean }[]) {
  return (searchTerm: T) =>
    filters
      .map((filter) => filter(searchTerm))
      .every((result) => result === true);
}
