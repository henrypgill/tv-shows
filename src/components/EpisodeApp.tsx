import { useState, useEffect } from "react";
import { searchNameOrSummary, searchEpisodeId } from "../core/episodeFilter";
import { getEpisodes, IEpisode } from "../core/fetchEpisodes";
import { getShows, IShow } from "../core/fetchShows";
import SearchBox from "./SearchBox";
import FilterDropDown from "./FilterDropDown";
import EpisodeList from "./EpisodeList";

export default function EpisodeApp() {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [shows, setShows] = useState<IShow[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");
  const [showFilter, setShowFilter] = useState("");

  useEffect(() => {
    async function fetchShowData() {
      const showData = await getShows();
      setShows(showData);
    }

    fetchShowData();
  }, []);

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

  return (
    <>
      <header>
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
        <EpisodeList episodes={filteredEpisodes} />
      </main>
    </>
  );
}
