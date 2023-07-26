import { IEpisode } from "../core/fetchEpisodes";
import { IShow } from "../core/fetchShows";
import { getEpisodeCode } from "../core/episodeCode";

type FilterDropProps = {
  dropDownState: string;
  handleOnChange(option: string): void;
} & (ShowDropDown | EpisodeDropDown);

type ShowDropDown = {
  type: "show";
  options: IShow[];
};

type EpisodeDropDown = {
  type: "episode";
  options: IEpisode[];
};

export default function FilterDropDown({
  type,
  options,
  dropDownState,
  handleOnChange,
}: FilterDropProps): JSX.Element {
  return (
    <select
      onChange={(e) => handleOnChange(e.target.value)}
      value={dropDownState}
      className="dropdown-input"
    >
      {type === "show" ? getShowOptions(options) : getEpisodeOptions(options)}
    </select>
  );
}

function getEpisodeOptions(options: IEpisode[]): JSX.Element {
  return (
    <>
      <option value="">All Episodes</option>
      {options.map((e) => (
        <option key={e.id} value={e.id}>
          {getEpisodeCode(e.season, e.number)}
        </option>
      ))}
    </>
  );
}

function getShowOptions(options: IShow[]): JSX.Element {
  return (
    <>
      <option disabled value="">
        Select Show
      </option>
      {options
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
    </>
  );
}
