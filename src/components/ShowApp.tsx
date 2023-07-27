import { IShow } from "../core/fetchShows";
import ShowList from "./ShowList";
import FilterDropDown from "./FilterDropDown";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { searchName, searchSummary, searchGenres } from "../core/contentFilter";

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

  const filteredShows = [
    ...new Set<IShow>([
      ...shows.filter(searchName(searchInput)),
      ...shows.filter(searchSummary(searchInput)),
      ...shows.filter(searchGenres(searchInput)),
    ]),
  ];

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
