import { IEpisode } from "../core/fetchEpisodes";
import { getEpisodeCode } from "../core/episodeCode";
import { IShow } from "../core/fetchShows";

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
  if (type === "episode") {
    const optionsElements = options.map((e) => (
      <option key={e.id} value={e.id}>
        {getEpisodeCode(e.season, e.number)}
      </option>
    ));

    return (
      <select
        onChange={(e) => handleOnChange(e.target.value)}
        value={dropDownState}
        className="dropdown-input"
      >
        <option value="">All Episodes</option>
        {optionsElements}
      </select>
    );
  } else {
    const optionsElements = options
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => (
        <option key={s.id} value={s.id}>
          {s.name}
        </option>
      ));

    return (
      <select
        onChange={(e) => handleOnChange(e.target.value)}
        value={dropDownState}
        className="dropdown-input"
      >
        <option disabled value="">
          Select Show
        </option>
        {optionsElements}
      </select>
    );
  }
}
