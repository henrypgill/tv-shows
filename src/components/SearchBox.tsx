interface SearchBoxProps {
  searchInput: string;
  onChangeHandler(newSearchText: string): void;
}

export function SearchBox({
  searchInput,
  onChangeHandler,
}: SearchBoxProps): JSX.Element {
  return (
    <input
      value={searchInput}
      onChange={(e) => onChangeHandler(e.target.value)}
      type="text"
      placeholder="Search..."
      className="search-input"
    ></input>
  );
}
