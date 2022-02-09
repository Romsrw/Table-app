import { useEffect, useMemo, useState } from "react";
import { randomData } from "./etc/RandomData";
import "./App.css";
import ListItem from "./components/listItem/ListItem";
import CrossIcon from "./UI/CrossIcon";
import SearchIcon from "./UI/SearchIcon";

const App = () => {
  const [data, setData] = useState([]);
  const [isVisibleType, setIsVisibleType] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!data.length) {
      setData((prev) => [...prev, ...randomData()]);
    }
  }, [data.length]);

  const filteredData = useMemo(
    () =>
      data.filter((group) =>
        group.title.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText, data]
  );

  const removeGroup = (title) => {
    setData((prev) => prev.filter((item) => item.title !== title));
  };

  const selectOptions = useMemo(
    () => filteredData.map((item) => item.title),
    [filteredData]
  );

  console.log(data);

  return (
    <div className="App">
      <ul>
        {filteredData.length ? (
          filteredData.map((item) => <ListItem item={item} key={item.title} />)
        ) : (
          <div>
            <span>Результатов не найдено</span>
          </div>
        )}
        <div className="actions">
          <div
            className="action"
            onClick={() =>
              setIsVisibleType((prev) => (prev === "search" ? "" : "search"))
            }
          >
            <button
              onClick={() =>
                setIsVisibleType((prev) => (prev === "search" ? "" : "search"))
              }
            >
              <CrossIcon />
            </button>
            {/* <select name="" id=""></select> */}
          </div>
          <div className="action">
            {isVisibleType === "cross" && (
              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            )}
            <button
              onClick={() =>
                setIsVisibleType((prev) => (prev === "cross" ? "" : "cross"))
              }
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default App;
