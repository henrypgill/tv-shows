import "./App.css";
import { useState } from "react";
import episodes from "../data/got-episodes.json";
import { searchNameOrSummary, searchEpisodeId } from "../core/episodeFilter";
import { SearchBox } from "./SearchBox";
import { FilterDropDown } from "./FilterDropDown";
import { EpisodeList } from "./EpisodeList";
import Footer from "./Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");

  const filteredEpisodes = episodes
    .filter(searchEpisodeId(episodeFilter))
    .filter(searchNameOrSummary(searchInput));

  return (
    <>
      <header>
        <div className="filter-container">
          <FilterDropDown
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

      <Footer />
    </>
  );
}

export default App;
