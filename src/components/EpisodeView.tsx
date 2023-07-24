import { getEpisodeCode } from "../core/episodeCode";

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
  const episodeCode = getEpisodeCode(episode.season, episode.number);
  return (
    <li>
      <div>
        <h3>{episodeCode}</h3>
        <h4>{episode.name}</h4>
        {episode.summary}
      </div>
      <img src={episode.image.medium} alt={"episode-medium-img"}></img>
    </li>
  );
}
