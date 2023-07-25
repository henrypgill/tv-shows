import { IEpisode } from "../components/EpisodeView";

export function filterNameAndSummary(
  episode: IEpisode,
  subStr: string
): boolean {
  const searchStr = subStr.toLowerCase();
  const name = episode.name.toLowerCase();
  const summary = episode.summary.toLowerCase();

  return name.includes(searchStr) || summary.includes(searchStr);
}
