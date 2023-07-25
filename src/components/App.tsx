import "./App.css";
import episodes from "../data/got-episodes.json";
import { EpisodeList } from "./EpisodeList";
import { searchNameOrSummary } from "../core/episodeFilter";
import { useState } from "react";

function App() {
  //@ts-ignore
  const [textInput, setTextInput] = useState("");

  const filteredEpisodes = episodes.filter(searchNameOrSummary(textInput));

  return <EpisodeList episodes={filteredEpisodes} />;
}

export default App;
