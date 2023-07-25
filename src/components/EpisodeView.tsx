import { getEpisodeCode } from "../core/episodeCode";
import { removePTags } from "../core/parseSummary";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface EpisodeViewProps {
  episode: IEpisode;
}

export function EpisodeView({ episode }: EpisodeViewProps): JSX.Element {
  return (
    <li className="episode-view">
      <img
        className="episode-img"
        src={episode.image.medium}
        alt={"episode-medium-img"}
      ></img>
      <div className="episode-text">
        <h3>{getEpisodeCode(episode.season, episode.number)}</h3>
        <h4>{episode.name}</h4>
        <p>{removePTags(episode.summary)}</p>
      </div>
    </li>
  );
}
