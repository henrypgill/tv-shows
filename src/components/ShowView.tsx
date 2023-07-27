import { removeTags } from "../core/parseSummary";

import { IShow } from "../core/fetchShows";

interface ShowViewProps {
  show: IShow;
  setShowFilter(showCode: string): void;
}

export default function ShowView({
  show,
  setShowFilter,
}: ShowViewProps): JSX.Element {
  const renderImage =
    show.image === null || show.image.medium === null
      ? "https://placehold.co/210x195"
      : show.image.medium;

  function handleShowClick() {
    setShowFilter(`${show.id}`);
  }

  return (
    <li className="show-view">
      <button className="show-button" onClick={handleShowClick}>
        <img className="show-img" src={renderImage} alt="of a tv show"></img>
        <div className="show-body">
          <div className="show-text">
            <h2>{show.name}</h2>
            <p>{removeTags(show.summary)}</p>
          </div>
          <ul className="show-data">
            <li>
              <b>Rated:</b>
              {show.rating.average}
            </li>
            <li>
              <b>Status:</b>
              {show.status}
            </li>
            <li>
              <b>Runtime:</b>
              {show.runtime}
            </li>
            <li>
              <b>Genres:</b>
              {show.genres.map((genre) => (
                <p key={genre}>{genre}</p>
              ))}
            </li>
          </ul>
        </div>
      </button>
    </li>
  );
}
