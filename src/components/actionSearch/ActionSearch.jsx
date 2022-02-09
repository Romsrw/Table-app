import React from "react";
import SearchIcon from "./../../UI/SearchIcon";

const ActionSearch = ({
  setSearchText,
  setIsVisibleType,
  isVisibleType,
  searchText,
}) => {
  return (
    <div className="action">
      {isVisibleType === "search" && (
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      )}
      <button
        onClick={() =>
          setIsVisibleType((prev) => (prev === "search" ? "" : "search"))
        }
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default ActionSearch;
