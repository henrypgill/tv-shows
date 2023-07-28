import { IShow } from "../core/fetchData";
import ShowList from "./ShowList";
import FilterDropDown from "./FilterDropDown";
import SearchBox from "./SearchBox";
import { useState } from "react";
import {
  searchName,
  searchSummary,
  searchGenres,
  combineFilters,
} from "../core/contentFilter";

export interface ShowAppProps {
  shows: IShow[];
  showFilter: string;
  setShowFilter(filter: string): void;
}

export default function ShowApp({
  shows,
  showFilter,
  setShowFilter,
}: ShowAppProps): JSX.Element {
  const [searchInput, setSearchInput] = useState("");

  const filterShows = combineFilters(
    searchName(searchInput),
    searchSummary(searchInput),
    searchGenres(searchInput)
  );

  const filteredShows = shows.filter(filterShows);

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
            options={filteredShows}
            dropDownState={showFilter}
            handleOnChange={setShowFilter}
          />
        </div>
        <h3 className="filter-count">{`Displaying ${filteredShows.length}/${shows.length} Shows`}</h3>
      </header>
      <main>
        <ShowList shows={filteredShows} setShowFilter={setShowFilter} />
      </main>
    </>
  );
}
