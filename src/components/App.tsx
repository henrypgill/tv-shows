import "./App.css";
import { useState, useEffect } from "react";
import { searchNameOrSummary, searchEpisodeId } from "../core/episodeFilter";
import { SearchBox } from "./SearchBox";
import { FilterDropDown } from "./FilterDropDown";
import { EpisodeList } from "./EpisodeList";
import { getEpisodes, IEpisode } from "../core/fetchEpisodes";
import { getShows, IShow } from "../core/fetchShows";
import Footer from "./Footer";

function App() {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [shows, setShows] = useState<IShow[]>([])
  const [searchInput, setSearchInput] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");
  //@ts-ignore
  const [showCode, setShowCode] = useState<number>(82);

  useEffect(() => {
    async function fetchEpisodeData() {
      const episodeData = await getEpisodes(showCode);
      setEpisodes(episodeData);
    }

    fetchEpisodeData();
  }, [showCode]);



  useEffect(() => {
    async function fetchShowData() {
      const showData = await getShows()
      setShows(showData);
    }

    fetchShowData();
  }, []);




  const filteredEpisodes = episodes
    .filter(searchEpisodeId(episodeFilter))
    .filter(searchNameOrSummary(searchInput));

  return (
    <>
      <header>
        <div className="filter-container">
          {/* <FilterDropDown
            options={shows}
            dropDownState={shows}
            handleOnChange={setShowCode}
          /> */}
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

      <Footer />
    </>
  );
}

export default App;
