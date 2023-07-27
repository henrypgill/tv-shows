import "./App.css";
import Footer from "./Footer";
import EpisodeApp from "./EpisodeApp";
import ShowApp from "./ShowApp";
import { useState, useEffect } from "react";
import { getShows, IShow } from "../core/fetchShows";

export default function App() {
  const [showFilter, setShowFilter] = useState("");
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    async function fetchShowData() {
      const showData = await getShows();
      setShows(showData);
    }

    fetchShowData();
  }, []);

  return (
    <div>
      {showFilter ? (
        <EpisodeApp
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          shows={shows}
        />
      ) : (
        <ShowApp
          shows={shows}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
      )}
      <Footer />
    </div>
  );
}
