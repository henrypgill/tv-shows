import { IEpisode } from "../core/fetchEpisodes";
import { getEpisodeCode } from "../core/episodeCode";
import { IShow } from "../core/fetchShows";

interface FilterDropProps {
  type: "show" | "episode";
  options: IEpisode[] | IShow[];
  dropDownState: string;
  handleOnChange(option: string): void;
}

export function FilterDropDown({
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
        <option value="">Show All</option>
        {optionsElements}
      </select>
    );
  } else if (type === "show") {
    const optionsElements = options.map((s) => (
      <option key={s.id} value={s.id}></option>
    ));

    return (
      <select
        onChange={(s) => handleOnChange(s.target.value)}
        value={dropDownState}
        className="dropdown-input"
      >
        <option value="">Show All</option>
        {optionsElements}
      </select>
    );
  }
}
