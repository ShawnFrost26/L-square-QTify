import React from "react";
import { ReactComponent as SearchIcon } from "../../Assets/Search-icon.svg";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} />
        <div className={styles.searchButton} type="submit">
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};

export default Search;
