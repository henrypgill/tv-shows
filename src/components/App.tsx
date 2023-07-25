import "./App.css";
import episodes from "../data/got-episodes.json";
import { EpisodeList } from "./EpisodeList";
import { searchNameOrSummary } from "../core/episodeFilter";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  //@ts-ignore
  const [searchInput, setSearchInput] = useState("");

  const filteredEpisodes = episodes.filter(searchNameOrSummary(searchInput));

  return (
    <>
      <Header
        searchInput={searchInput}
        onChangeHandler={setSearchInput}
        filteredCount={filteredEpisodes.length}
        totalCount={episodes.length}
      />

      <main>
        <EpisodeList episodes={filteredEpisodes} />
      </main>
      <Footer />
    </>
  );
}

export default App;
