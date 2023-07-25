import { IEpisode } from "../components/EpisodeView";

export function searchNameOrSummary(
  subStr: string
): (episode: IEpisode) => boolean {
  return (episode) => {
    const searchStr = subStr.toLowerCase();
    const name = episode.name.toLowerCase();
    const summary = episode.summary.toLowerCase();

    return name.includes(searchStr) || summary.includes(searchStr);
  };
}
