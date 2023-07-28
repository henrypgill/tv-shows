import "./App.css";
import Footer from "./Footer";
import EpisodeApp from "./EpisodeApp";
import ShowApp from "./ShowApp";
import { useState, useEffect } from "react";
import { cacheFetch, getShows, IShow } from "../core/fetchData";

const fetchShows = cacheFetch(getShows);

export default function App() {
  const [showFilter, setShowFilter] = useState("");
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchShowData() {
      const showData = await fetchShows(1);
      if (!cancelled) {
        setShows(showData);
      }
    }

    fetchShowData();

    return () => {
      cancelled = true;
    };
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
