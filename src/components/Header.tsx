import { SearchBox } from "./SearchBox";

interface HeaderProps {
  searchInput: string;
  onChangeHandler(newSearchText: string): void;
  filteredCount: number;
  totalCount: number;
}

function Header({
  searchInput,
  onChangeHandler,
  filteredCount,
  totalCount,
}: HeaderProps): JSX.Element {
  return (
    <header>
      <SearchBox searchInput={searchInput} onChangeHandler={onChangeHandler} />
      <h3>{`Displaying ${filteredCount}/${totalCount} Episodes`}</h3>
    </header>
  );
}

export default Header;
