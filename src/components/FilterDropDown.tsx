import { IEpisode } from "./EpisodeView";
import { getEpisodeCode } from "../core/episodeCode";

interface FilterDropProps {
  options: IEpisode[];
  dropDownState: string;
  handleOnChange(option: string): void;
}

export function FilterDropDown({
  options,
  dropDownState,
  handleOnChange,
}: FilterDropProps): JSX.Element {
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
}
