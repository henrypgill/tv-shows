import "./App.css";
import episodes from "../data/got-episodes.json";

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function App() {
  return (
    <>
      {episodes.map((episode: IEpisode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </>
  );
}

export default App;
