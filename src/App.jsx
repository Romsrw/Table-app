import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./components/listItem/ListItem";
import { randomData } from "./etc/RandomData";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      setData((prev) => [...prev, ...randomData()]);
    }
  }, [data.length]);

  console.log(data);
  
  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <ListItem item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default App;
