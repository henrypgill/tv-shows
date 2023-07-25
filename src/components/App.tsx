import "./App.css";
import episodes from "../data/got-episodes.json";
import { EpisodeList } from "./EpisodeList";
import { searchNameOrSummary } from "../core/episodeFilter";
import { useState } from "react";
import { SearchBox } from "./SearchBox";
import Footer from "./Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const filteredEpisodes = episodes.filter(searchNameOrSummary(searchInput));

  return (
    <>
      <header>
        <div className="filter-container">
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
