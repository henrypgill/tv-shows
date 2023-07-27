import { IShow } from "../core/fetchShows";
import ShowList from "./ShowList";
import FilterDropDown from "./FilterDropDown";
import SearchBox from "./SearchBox";
//@ts-ignore
import { useState, useEffect } from "react";

export interface ShowAppProps {
  shows: IShow[];
  showFilter: string;
  setShowFilter(filter: string): void;
}

//@ts-ignore
export default function ShowApp({
  shows,
  showFilter,
  setShowFilter,
}: ShowAppProps): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const filteredShows = shows;
  return (
    <>
      <header>
        <div className="filter-container">
          <SearchBox
            searchInput={searchInput}
            onChangeHandler={setSearchInput}
          />
          <FilterDropDown
            type={"show"}
            options={shows}
            dropDownState={showFilter}
            handleOnChange={setShowFilter}
          />
        </div>
        <h3 className="filter-count">{`Displaying ${filteredShows.length}/${shows.length} Episodes`}</h3>
      </header>
      <main>
        <ShowList shows={shows} setShowFilter={setShowFilter} />
      </main>
    </>
  );
}
