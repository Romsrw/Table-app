import { useEffect, useMemo, useState } from "react";
import { randomData } from "./etc/RandomData";
import "./App.css";
import ListItem from "./components/listItem/ListItem";
import ActionSearch from "./components/actionSearch/ActionSearch";
import ActionSelect from "./components/actionSelect/ActionSelect";

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
  console.log(selectOptions);

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
          <ActionSelect
            isVisibleType={isVisibleType}
            setIsVisibleType={setIsVisibleType}
            removeGroup={removeGroup}
            selectOptions={selectOptions}
          />
          <ActionSearch
            isVisibleType={isVisibleType}
            setIsVisibleType={setIsVisibleType}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
      </ul>
    </div>
  );
};

export default App;
