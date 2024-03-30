import css from "./SearchBox.module.css";
const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className={css.container}>
      <p className={css.searchText}> Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder=""
        value={searchValue}
        onChange={setSearchValue}
      />
    </div>
  );
};

export default SearchBox;
