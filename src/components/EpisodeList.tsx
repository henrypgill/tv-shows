import { IEpisode, EpisodeView } from "./EpisodeView";

interface EpisodeListProps {
  episodes: IEpisode[];
}

export function EpisodeList({ episodes }: EpisodeListProps): JSX.Element {
  return (
    <section>
      <ol>
        {episodes.map((episode) => (
          <EpisodeView key={episode.id} episode={episode} />
        ))}
      </ol>
    </section>
  );
}
