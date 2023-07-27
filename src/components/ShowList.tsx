import { IShow } from "../core/fetchShows";
import ShowView from "./ShowView";

interface ShowListProps {
  shows: IShow[];
  setShowFilter(showCode: string): void;
}

export default function ShowList({
  shows,
  setShowFilter,
}: ShowListProps): JSX.Element {
  if (shows.length === 0) {
    return <h3>No shows found. Try expanding your search!</h3>;
  }

  return (
    <section>
      <ol className="show-list">
        {shows.map((show) => (
          <ShowView key={show.id} show={show} setShowFilter={setShowFilter} />
        ))}
      </ol>
    </section>
  );
}
