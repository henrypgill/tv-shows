import { getEpisodeCode } from "../core/episodeCode";
import { removeTags } from "../core/parseSummary";

import { IEpisode } from "../core/fetchData";

interface EpisodeViewProps {
  episode: IEpisode;
}

export default function EpisodeView({
  episode,
}: EpisodeViewProps): JSX.Element {
  const renderImage =
    episode.image === null || episode.image.medium === null
      ? "https://placehold.co/240x150"
      : episode.image.medium;

  return (
    <li className="episode-view">
      <img
        className="episode-img"
        src={renderImage}
        alt={"episode-medium-img"}
      ></img>
      <div className="episode-text">
        <h3>{getEpisodeCode(episode.season, episode.number)}</h3>
        <h4>{episode.name}</h4>
        {episode.summary && <p>{removeTags(episode.summary)}</p>}
      </div>
    </li>
  );
}
