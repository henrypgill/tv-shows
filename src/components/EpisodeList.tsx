import { IEpisode } from "../core/fetchEpisodes";
import EpisodeView from "./EpisodeView";

interface EpisodeListProps {
  episodes: IEpisode[];
}

export default function EpisodeList({
  episodes,
}: EpisodeListProps): JSX.Element {
  if (episodes.length === 0) {
    return <h3>No episodes found. Try expanding your search!</h3>;
  }

  return (
    <section>
      <ol className="episode-list">
        {episodes.map((episode) => (
          <EpisodeView key={episode.id} episode={episode} />
        ))}
      </ol>
    </section>
  );
}
