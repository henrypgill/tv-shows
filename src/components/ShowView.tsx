// import { removeTags } from "../core/parseSummary";

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
      ? "https://placehold.co/240x150"
      : show.image.medium;

  function handleShowClick() {
    setShowFilter(`${show.id}`);
  }

  return (
    <li>
      <button className="Show-view" onClick={handleShowClick}>
        <h2>{show.name}</h2>
        <div>
          <div className="show-view-left">
            <img src={renderImage} alt="of a tv show"></img>
            <p>{show.summary}</p>
          </div>
          <div className="show-view-right">
            <ul>
              <li>
                <b>Rated:</b>
                {show.rating.average}
              </li>
              <li>
                <b>Genres:</b>
                {show.genres.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </li>
              <li>
                <b>Status:</b>
                {show.status}
              </li>
              <li>
                <b>Runtime:</b>
                {show.runtime}
              </li>
            </ul>
          </div>
        </div>
      </button>
    </li>
  );
}
