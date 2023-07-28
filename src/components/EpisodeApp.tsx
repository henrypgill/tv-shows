import { useState, useEffect } from "react";
import {
  searchName,
  searchSummary,
  searchEpisodeId,
  combineFilters,
} from "../core/contentFilter";
import { IEpisode, IShow, cacheFetch, getEpisodes } from "../core/fetchData";
import SearchBox from "./SearchBox";
import FilterDropDown from "./FilterDropDown";
import EpisodeList from "./EpisodeList";

interface EpisodeAppProps {
  showFilter: string;
  setShowFilter(showCode: string): void;
  shows: IShow[];
}

const fetchEpisodes = cacheFetch(getEpisodes);

export default function EpisodeApp({
  showFilter,
  setShowFilter,
  shows,
}: EpisodeAppProps) {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function fetchEpisodeData() {
      const episodeData = await fetchEpisodes(showFilter);
      if (!cancelled) {
        setEpisodes(episodeData);
        setEpisodeFilter("");
        setSearchInput("");
      }
    }

    fetchEpisodeData();

    return () => {
      cancelled = true;
    };
  }, [showFilter]);

  const filterEpisodes = combineFilters(
    searchName(searchInput),
    searchSummary(searchInput)
  );

  const filteredEpisodes = episodes
    .filter(filterEpisodes)
    .filter(searchEpisodeId(episodeFilter));

  const showTitle = (
    shows.find((show) => show.id === parseInt(showFilter)) as IShow
  ).name;

  return (
    <>
      <header>
        <div className="filter-container">
          <button className="back-button" onClick={() => setShowFilter("")}>
            Back
          </button>
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
