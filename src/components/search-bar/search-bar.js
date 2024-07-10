import "./search-bar.css";

export const SearchBar = ({ onSearchTermChange, searchInput }) => {
  const handleInputChange = e => {
    onSearchTermChange(e.target.value);
  }

  return (
    <div className="search-bar-wrapper">
      <form>
        <input
          type="text" placeholder="Search for a flavor"
          onChange={handleInputChange}
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;