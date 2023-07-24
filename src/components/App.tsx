import "./App.css";
import episodes from "../data/got-episodes.json";
import { EpisodeList } from "./EpisodeList";

function App() {
  return <EpisodeList episodes={episodes} />;
}

export default App;
