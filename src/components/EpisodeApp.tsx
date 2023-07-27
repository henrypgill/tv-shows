import { useState, useEffect } from "react";
import { searchNameOrSummary, searchEpisodeId } from "../core/episodeFilter";
import { getEpisodes, IEpisode } from "../core/fetchEpisodes";
import { IShow } from "../core/fetchShows";
import SearchBox from "./SearchBox";
import FilterDropDown from "./FilterDropDown";
import EpisodeList from "./EpisodeList";

interface EpisodeAppProps {
  showFilter: string;
  setShowFilter(showCode: string): void;
  shows: IShow[];
}

export default function EpisodeApp({
  showFilter,
  setShowFilter,
  shows,
}: EpisodeAppProps) {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");

  useEffect(() => {
    async function fetchEpisodeData() {
      const episodeData = await getEpisodes(showFilter);
      setEpisodes(episodeData);
      setEpisodeFilter("");
      setSearchInput("");
    }

    fetchEpisodeData();
  }, [showFilter]);

  const filteredEpisodes = episodes
    .filter(searchEpisodeId(episodeFilter))
    .filter(searchNameOrSummary(searchInput));

  const showTitle = (
    shows.find((show) => show.id === parseInt(showFilter)) as IShow
  ).name;
  return (
    <>
      <header>
        <button className="back-button" onClick={() => setShowFilter("")}>
          Back
        </button>
        <div className="filter-container">
          <FilterDropDown
            type={"show"}
            options={shows}
            dropDownState={showFilter}
            handleOnChange={setShowFilter}
          />
          <FilterDropDown
            type={"episode"}
            options={episodes}
            dropDownState={episodeFilter}
            handleOnChange={setEpisodeFilter}
          />
          <SearchBox
            searchInput={searchInput}
            onChangeHandler={setSearchInput}
          />
        </div>
        <h3 className="filter-count">{`Displaying ${filteredEpisodes.length}/${episodes.length} Episodes`}</h3>
      </header>

      <main>
        <h2 className="show-title">{showTitle}</h2>
        <EpisodeList episodes={filteredEpisodes} />
      </main>
    </>
  );
}
