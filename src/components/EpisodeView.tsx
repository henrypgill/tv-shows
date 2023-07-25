import { getEpisodeCode } from "../core/episodeCode";
import { removePTags } from "../core/parseSummary";

import { IEpisode } from "../core/fetchData";


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
